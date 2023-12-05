const apiKey = process.env.OPENAI_API_KEY;
const { Configuration, OpenAIApi } = require('openai');
const jwt_decode = require('jwt-decode');
import { initFirebaseAdmin } from '../../firebase/admin';
import { auth, firestore } from 'firebase-admin';

const configuration = new Configuration({ apiKey: apiKey });
const openai = new OpenAIApi(configuration);

initFirebaseAdmin();

const handler = async (req: any, res: any) => {
    // Returning incorrect request type.
    if (req.method !== 'POST')
        return res.status(400).json({ response: 'Error: Only POST requests allowed.' });

    // User information.
    const { token, prompt } = req.body;
    const user = await jwt_decode(token);
    const isPremium: boolean = user.stripeRole;
    const userId: string = user.user_id;

    // Check authorization.
    const isAuthorized = (await auth().verifyIdToken(token)).uid;
    if (!isAuthorized) return res.status(401).json({ response: 'Error: Unable to verify user.' });

    // Prompt error checking.
    if (!prompt || String(prompt).length < 10 || prompt === null || prompt === undefined) {
        return res.status(200).json({
            response: 'Error: Your prompt must be at least 10 characters.',
        });
    }

    // Updating Firebase information.
    const userDocument = (await firestore().collection('customers').doc(userId).get()).data();

    // Checking if document exists.
    if (!userDocument) return res.status(400).end();

    // Token error checking.
    if (!isPremium) {
        // Checking free generation count.
        if (
            Number(userDocument.freeGenerations ? userDocument.freeGenerations : 0) + 1 >
            Number(process.env.FREE_GENERATIONS)
        ) {
            return res.status(200).json({
                response:
                    'Error: You are currently using the free plan and have used your free generations, please upgrade.',
            });
        }
    }

    // Update Firebase information.
    if (!('freeGenerations' in userDocument)) {
        await firestore().collection('customers').doc(userId).update({ freeGenerations: 1 });
    } else {
        await firestore()
            .collection('customers')
            .doc(userId)
            .update({ freeGenerations: Number(userDocument.freeGenerations) + 1 });
    }

    // Generate a response with OpenAI API.
    try {
        const completion = await openai.createChatCompletion({
            model: String(process.env.OPENAI_API_MODEL),
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: Number(process.env.OPENAI_API_TEMPERATURE),
            max_tokens: Number(process.env.OPENAI_API_MAX_TOKENS),
        });
        return res.status(200).json({ response: completion.data.choices[0].message.content });
    } catch (error) {
        return res.status(400).end();
    }
};

export default handler;
