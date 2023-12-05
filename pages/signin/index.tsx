import SignIn from '@/components/SignIn';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import { useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { initFirebase } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import useContent from '../../utilities/useContent';

const Page = () => {
    initFirebase();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const title = useContent('sign-in.page.title');

    const signInGoogle = async () => {
        await signInWithPopup(auth, provider).catch((error) => {
            setError(error.message);
        });
    };

    const signInEmail = async () => {
        if (!email || email === '') return setError('Client: Error (invalid-email).');
        if (!password || password === '') return setError('Client: Error (invalid-password).');
        await signInWithEmailAndPassword(auth, email, password).catch((error) => {
            setError(error.message);
        });
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
            <SignIn
                signInGoogle={signInGoogle}
                signInEmail={signInEmail}
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
            />
            <Footer />
        </div>
    );
};

export default Page;
