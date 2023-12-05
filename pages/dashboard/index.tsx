import Navigation from '@/components/Navigation';
import Dashboard from '@/components/dashboard/Dashboard';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from '@/firebase';
import { useRouter } from 'next/router';
import { createCheckoutSession, usePremiumStatus } from '../../stripe';
import useContent from '@/utilities/useContent';
import { getFirestore, collection, doc, getDoc, onSnapshot } from 'firebase/firestore';

const Page = () => {
    initFirebase();
    const auth = getAuth();
    const [upgrading, setUpgrading] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [freeGenerations, setFreeGenerations] = useState(0);
    const isUserPremium = usePremiumStatus(user);
    const router = useRouter();
    const title = useContent('dashboard.page.title');

    const getFreeGenerations = async () => {
        if (!user) return;
        const userDocumentRef = doc(getFirestore(), 'customers', user.uid);
        return onSnapshot(userDocumentRef, (snapshot) => {
            const snapshotData = snapshot.data();
            if (snapshotData && 'freeGenerations' in snapshotData)
                setFreeGenerations(Number(snapshotData.freeGenerations));
        });
    };

    useEffect(() => {
        if (user && !isUserPremium) getFreeGenerations();
    }, [user, isUserPremium]);

    if (loading) {
        return <div />;
    }

    if (!user) {
        router.push('/signin');
        return <div />;
    }

    const upgrade = async () => {
        setUpgrading(true);
        await createCheckoutSession(user.uid);
    };

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <Dashboard
                user={user}
                upgrade={upgrade}
                upgrading={upgrading}
                isUserPremium={isUserPremium}
                freeGenerations={freeGenerations}
            />
            <Footer />
        </div>
    );
};

export default Page;
