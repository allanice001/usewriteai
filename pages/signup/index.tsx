import SignUp from '@/components/SignUp';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import { initFirebase } from '@/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import useContent from '../../utilities/useContent';

const Page = () => {
    initFirebase();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const title = useContent('sign-up.page.title');

    const signUpUser = async () => {
        if (!agreed) return setError('Client: Error (terms-not-accepted).');
        if (!email || email === '') return setError('Client: Error (invalid-email).');
        if (!password || password === '') return setError('Client: Error (invalid-password).');
        if (password !== confirmPassword) return setError('Client: Error (passwords-dont-match).');
        await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
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
            <SignUp
                signUpUser={signUpUser}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                setAgreed={setAgreed}
                error={error}
            />
            <Footer />
        </div>
    );
};

export default Page;
