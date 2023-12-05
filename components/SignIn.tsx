import { motion } from 'framer-motion';
import Alert from './Alert';
import Link from 'next/link';
import useContent from '../utilities/useContent';

interface Props {
    signInGoogle: () => void;
    signInEmail: () => void;
    setEmail: (newEmail: string) => void;
    setPassword: (newPassword: string) => void;
    error: string;
}

const SignIn = ({ signInGoogle, signInEmail, setEmail, setPassword, error }: Props) => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className="max-w-sm w-full flex flex-col items-center gap-4 py-28"
            >
                <h1 className="text-center text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white pb-4">
                    {useContent('sign-in.title')}
                </h1>
                <form className="w-full flex flex-col gap-4">
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder={useContent('sign-in.email-placeholder')}
                        className="focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder={useContent('sign-in.password-placeholder')}
                        className="focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-white dark:bg-slate-900 outline-none w-full text-black dark:text-white"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                {error ? <Alert type="error" message={error} /> : null}
                <div className="w-full flex flex-row items-center">
                    <Link
                        className="inline-block py-4 font-medium leading-none text-slate-500"
                        href="/forgot-password"
                    >
                        {useContent('sign-in.forgot-password-button')}
                    </Link>
                    <div className="flex flex-grow" />
                    <button
                        className="rounded-lg inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                        onClick={signInEmail}
                    >
                        {useContent('sign-in.sign-in-button')}
                    </button>
                </div>
                <div className="flex items-center w-full">
                    <hr className="border-slate-300 dark:border-slate-800 grow border" />
                    <div className="text-slate-500 font-medium mx-3">
                        {useContent('sign-in.or')}
                    </div>
                    <hr className="border-slate-300 dark:border-slate-800 grow border" />
                </div>
                <button
                    className="rounded-lg border-2 border-slate-300 dark:border-slate-800 w-full flex flex-row gap-2 items-center justify-center py-2 px-8 font-semibold leading-none text-slate-500 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 duration-200"
                    onClick={signInGoogle}
                >
                    <svg
                        className="flex-shrink-0 w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.68 12.1818C19.68 11.6145 19.6291 11.0691 19.5345 10.5454H12V13.64H16.3055C16.12 14.64 15.5564 15.4873 14.7091 16.0545V18.0618H17.2945C18.8073 16.6691 19.68 14.6182 19.68 12.1818Z"
                            fill="#4285F4"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0007 20C14.1607 20 15.9716 19.2836 17.2952 18.0618L14.7097 16.0545C13.9934 16.5345 13.077 16.8182 12.0007 16.8182C9.91702 16.8182 8.15338 15.4109 7.52429 13.52H4.85156V15.5927C6.16793 18.2073 8.87338 20 12.0007 20Z"
                            fill="#34A853"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.52364 13.52C7.36364 13.04 7.27273 12.5273 7.27273 12C7.27273 11.4727 7.36364 10.96 7.52364 10.48V8.40726H4.85091C4.30909 9.48726 4 10.7091 4 12C4 13.2909 4.30909 14.5127 4.85091 15.5927L7.52364 13.52Z"
                            fill="#FBBC05"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0007 7.18182C13.1752 7.18182 14.2297 7.58545 15.0588 8.37818L17.3534 6.08364C15.9679 4.79273 14.157 4 12.0007 4C8.87338 4 6.16793 5.79273 4.85156 8.40727L7.52429 10.48C8.15338 8.58909 9.91702 7.18182 12.0007 7.18182Z"
                            fill="#EA4335"
                        ></path>
                    </svg>
                    <span>{useContent('sign-in.google')}</span>
                </button>
                <Link
                    className="rounded-lg w-full text-center py-4 px-8 font-semibold leading-none bg-primary text-white"
                    href="/signup"
                >
                    {useContent('sign-in.sign-up-button')}
                </Link>
            </motion.div>
        </section>
    );
};

export default SignIn;
