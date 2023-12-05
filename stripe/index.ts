import { loadStripe } from '@stripe/stripe-js';
import { initFirebase } from '../firebase';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';

const initStripe = async () => {
    const stripePromise = await loadStripe(process.env.STRIPE_KEY ? process.env.STRIPE_KEY : '');
    return stripePromise;
};

async function createCheckoutSession(uid: string) {
    const firestore = getFirestore(initFirebase());

    const checkoutSesstionRefNew = await addDoc(
        collection(firestore, 'customers', uid, 'checkout_sessions'),
        {
            price: process.env.STRIPE_PRICE,
            success_url: window.location.origin + '/dashboard',
            cancel_url: window.location.origin + '/dashboard',
        },
    );

    onSnapshot(checkoutSesstionRefNew, async (snap) => {
        const { sessionId }: any = snap.data();
        if (sessionId) {
            const stripe = await initStripe();
            stripe?.redirectToCheckout({ sessionId });
        }
    });
}

async function createPortalLink() {
    const functionRef = getFunctions(initFirebase(), process.env.FIREBASE_LOCATION);
    const createPortalLinkRef = httpsCallable(
        functionRef,
        'ext-firestore-stripe-payments-createPortalLink',
    );

    const { data }: any = await createPortalLinkRef({
        returnUrl: window.location.origin + '/account',
    });

    return window.location.assign(data.url);
}

async function isUserPremium() {
    initFirebase();
    const auth = getAuth();
    await auth.currentUser?.getIdToken(true);
    const decodedToken = await auth.currentUser?.getIdTokenResult();
    return decodedToken?.claims?.stripeRole ? true : false;
}

function usePremiumStatus(user: any) {
    const [premiumStatus, setPremiumStatus] = useState(false);

    useEffect(() => {
        if (user) {
            const checkPremiumStatus = async function () {
                setPremiumStatus(await isUserPremium());
            };
            checkPremiumStatus();
        }
    }, [user]);

    return premiumStatus;
}

export { initStripe, createCheckoutSession, createPortalLink, isUserPremium, usePremiumStatus };
