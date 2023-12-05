import { motion } from 'framer-motion';
import Alert from './Alert';
import Link from 'next/link';
import useContent from '../utilities/useContent';

interface Props {
    setEmail: (newEmail: string) => void;
    resetPassword: () => void;
    error: string;
    success: string;
    resetting: boolean;
}

const ForgotPassword = ({ setEmail, resetPassword, error, success, resetting }: Props) => {
    const loadingButtonContent = useContent('forgot-password.button.loading');
    const defaultButtonContent = useContent('forgot-password.button.default');

    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className="max-w-sm w-full flex flex-col items-center gap-4 py-28"
            >
                <h1 className="text-center text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white pb-4">
                    {useContent('forgot-password.title')}
                </h1>
                <div className="w-full flex flex-col gap-3">
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder={useContent('forgot-password.email-placeholder')}
                        className="focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {success ? <Alert type="success" message={success} /> : null}
                {error ? <Alert type="error" message={error} /> : null}
                <div className="w-full flex flex-row items-center">
                    <Link
                        className="inline-block py-4 font-medium leading-none text-slate-500"
                        href="/signin"
                    >
                        {useContent('forgot-password.sign-in-button')}
                    </Link>
                    <div className="flex flex-grow" />
                    <button
                        disabled={resetting}
                        className="rounded-lg inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                        onClick={resetPassword}
                    >
                        {resetting ? loadingButtonContent : defaultButtonContent}
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default ForgotPassword;
