import { motion } from 'framer-motion';
import Alert from './Alert';
import Link from 'next/link';
import useContent from '../utilities/useContent';

interface Props {
    signUpUser: () => void;
    setEmail: (newEmail: string) => void;
    setPassword: (newPassword: string) => void;
    setConfirmPassword: (newConfirmPassword: string) => void;
    setAgreed: (newAgreed: boolean) => void;
    error: string;
}

const SignUp = ({
    signUpUser,
    setEmail,
    setPassword,
    setConfirmPassword,
    setAgreed,
    error,
}: Props) => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className="max-w-sm w-full flex flex-col items-center gap-4 py-28"
            >
                <h1 className="text-center text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white pb-4">
                    {useContent('sign-up.title')}
                </h1>
                <form className="w-full flex flex-col gap-4">
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder={useContent('sign-up.email-placeholder')}
                        className="focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder={useContent('sign-up.password-placeholder')}
                        className="focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        id="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        placeholder={useContent('sign-up.confirm-password-placeholder')}
                        className="focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </form>
                <label className="flex items-center py-2">
                    <input
                        type="checkbox"
                        className="form-checkbox mt-0.5"
                        defaultChecked
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <span className="text-sm font-medium text-gray-500 ml-3">
                        I accept the{' '}
                        <Link
                            className="underline underline-offset-2 hover:underline"
                            href="/terms"
                        >
                            terms
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="underline underline-offset-2 hover:underline"
                            href="/terms"
                        >
                            privacy policy
                        </Link>
                        .
                    </span>
                </label>
                {error ? <Alert type="error" message={error} /> : null}
                <div className="w-full flex flex-row items-center">
                    <Link
                        className="inline-block py-4 font-medium leading-none text-slate-500"
                        href="/signin"
                    >
                        {useContent('sign-up.sign-in-button')}
                    </Link>
                    <div className="flex flex-grow" />
                    <button
                        className="rounded-lg inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                        onClick={signUpUser}
                    >
                        {useContent('sign-up.sign-up-button')}
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default SignUp;
