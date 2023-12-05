import { motion, AnimatePresence } from 'framer-motion';
import Alert from '../Alert';
import Loading from '../Loading';
import { useState, useEffect } from 'react';
import useContent from '@/utilities/useContent';
import type { User } from 'firebase/auth';
import { ClipboardIcon } from '@heroicons/react/20/solid';

interface Props {
    user: User;
}

const Generate = ({ user }: Props) => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(useContent('dashboard.default-response'));
    const [generating, setGenerating] = useState(false);
    const [typedResponse, setTypedResponse] = useState('');
    const [promptError, setPromptError] = useState('');
    const loadingButtonContent = useContent('dashboard.generate-button.loading');
    const defaultButtonContent = useContent('dashboard.generate-button.default');
    const promptErrorLengthContent = useContent('dashboard.prompt-error-length');
    const promptErrorGenericContent = useContent('dashboard.prompt-error-generic');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = response.split(' ').slice(0, typedResponse.split(' ').length + 1);
            setTypedResponse(current.join(' '));
        }, 60);

        return () => clearTimeout(timeout);
    }, [response, typedResponse]);

    const addToLocalStorage = (generatedPrompt: string, generatedResponse: string) => {
        const previousJson = localStorage.getItem('previous');
        const previousGenerations = previousJson ? JSON.parse(previousJson) : [];
        previousGenerations.push({ prompt: generatedPrompt, response: generatedResponse });
        localStorage.setItem('previous', JSON.stringify(previousGenerations));
    };

    const generate = async () => {
        setGenerating(true);
        const token = await user.getIdToken();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token: token, prompt: prompt }),
        };

        if (prompt.length <= 10) {
            setGenerating(false);
            setPromptError(promptErrorLengthContent);
            setTimeout(() => setPromptError(''), 2000);
            return;
        }

        await fetch('/api/generate', requestOptions)
            .then((data) => {
                if (data.status !== 200) throw new Error();
                return data.json();
            })
            .then((data) => {
                if (String(data.response).startsWith('Error:')) return setResponse(data.response);
                addToLocalStorage(prompt, data.response);
                return setResponse(data.response);
            })
            .catch(() => {
                return setResponse(promptErrorGenericContent);
            });

        setPrompt('');
        setGenerating(false);
    };

    return (
        <motion.div
            key="1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="flex flex-col grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2"
        >
            <div className="w-full flex flex-col gap-4 items-start">
                <label className="font-medium text-sm text-slate-500">
                    {useContent('dashboard.prompt-label')}
                </label>
                <input
                    id="prompt"
                    placeholder={useContent('dashboard.prompt-placeholder')}
                    className="duration-200 focus:border-primary dark:focus:border-primary rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                    required
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button
                    disabled={generating}
                    onClick={generate}
                    className={`${
                        generating
                            ? 'bg-slate-300 text-slate-500 dark:bg-slate-800'
                            : 'bg-primary text-white'
                    } shrink-0 rounded-lg w-full lg:w-auto inline-block py-4 px-8 font-semibold leading-none`}
                >
                    {generating ? loadingButtonContent : defaultButtonContent}
                </button>
                <AnimatePresence>
                    {promptError.length > 0 ? <Alert type="error" message={promptError} /> : null}
                </AnimatePresence>
            </div>
            <div className="w-full flex flex-col gap-4 items-start">
                <label className="font-medium text-sm text-slate-500">
                    {useContent('dashboard.response-label')}
                </label>
                <div className="h-96 w-full flex items-center justify-center flex-col border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 border-2 rounded-lg overflow-hidden">
                    {generating ? (
                        <Loading />
                    ) : (
                        <p className="font-medium w-full h-full px-4 py-3 text-slate-800 dark:text-white font-medium leading-8">
                            {typedResponse}
                        </p>
                    )}
                </div>
                <button
                    onClick={() => navigator.clipboard.writeText(response)}
                    className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 rounded-lg w-full lg:w-auto inline-block py-4 px-6 font-semibold leading-none flex flex-row gap-2 items-center"
                >
                    {useContent('dashboard.copy')}
                    <ClipboardIcon className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
};

export default Generate;
