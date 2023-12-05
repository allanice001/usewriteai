import { initFirebase } from '@/firebase';
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import ForgotPassword from '@/components/ForgotPassword';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '@/components/Footer';
import useContent from '../../utilities/useContent';

const Page = () => {
    initFirebase();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [resetting, setResetting] = useState(false);
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const title = useContent('forgot-password.page.title');

    const resetPassword = async () => {
        if (!email || email === '') return setError('Client: Error (invalid-email).');
        setResetting(true);
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess('Firebase: Sent (auth/email-sent).');
            })
            .catch((error) => {
                setError(error.message);
            });
        setResetting(false);
    };

    if (loading) {
        return <div />;
    }

    if (user) {
        router.push('/dashboard');
        return <div />;
    }

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <ForgotPassword
                setEmail={setEmail}
                resetPassword={resetPassword}
                error={error}
                success={success}
                resetting={resetting}
            />
            <Footer />
        </div>
    );
};

export default Page;
