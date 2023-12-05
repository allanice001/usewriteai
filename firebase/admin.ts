import { initializeApp, getApps, cert } from 'firebase-admin/app';
const serviceAccount = require('./admin.json');

const initFirebaseAdmin = () => {
    if (getApps().length <= 0) initializeApp({ credential: cert(serviceAccount) });
};

export { initFirebaseAdmin };
