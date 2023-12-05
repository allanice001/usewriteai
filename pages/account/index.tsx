import Navigation from '@/components/Navigation';
import Account from '@/components/Account';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { initFirebase } from '@/firebase';
import { type User, getAuth } from 'firebase/auth';
import { createPortalLink } from '@/stripe';
import Footer from '@/components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import useContent from '../../utilities/useContent';
import jwt_decode from 'jwt-decode';

const Page = () => {
    initFirebase();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [plan, setPlan] = useState('');
    const [openingPortal, setOpeningPortal] = useState(false);
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    const title = useContent('account.page.title');

    const openPortal = async () => {
        setOpeningPortal(true);
        await createPortalLink();
    };

    const setUserState = async () => {
        const userEmail = user?.email || 'n/a';
        const userName = user?.displayName || 'n/a';
        const decodedUser: (User & { stripeRole?: string }) | undefined = user
            ? await jwt_decode(String(await user.getIdToken()))
            : undefined;
        const userPlan = decodedUser?.stripeRole ? 'Premium' : 'n/a';
        setEmail(userEmail);
        setName(userName);
        setPlan(userPlan);
    };

    useEffect(() => {
        if (user) setUserState();
    }),
        [user];

    if (loading) {
        return <div />;
    }

    if (!user) {
        router.push('/signin');
        return <div />;
    }

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <Account
                openPortal={openPortal}
                email={email}
                name={name}
                plan={plan}
                openingPortal={openingPortal}
            />
            <Footer />
        </div>
    );
};

export default Page;
