import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SunIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useContent from '@/utilities/useContent';

const Navigation = () => {
    const router = useRouter();
    const auth = getAuth();
    const [menu, setMenu] = useState(false);
    const [mode, setMode] = useState('light');
    const [dashboard, setDashboard] = useState(false);
    const [user] = useAuthState(auth);
    const navigationContent = useContent('navigation.items');
    const dashboardContent = useContent('navigation.dashboard');
    const accountContent = useContent('navigation.account');
    const signOutButtonContent = useContent('navigation.sign-out-button');
    const signInButtonContent = useContent('navigation.sign-in-button');
    const signUpButtonContent = useContent('navigation.sign-up-button');
    const dashboardButtonContent = useContent('navigation.dashboard-button');

    const signOut = (): void => {
        auth.signOut();
    };

    const toggleMenu = (): void => {
        setMenu(!menu);
    };

    const toggleMode = (): void => {
        if (mode === 'dark') {
            setMode('light');
            return localStorage.setItem('mode', JSON.stringify('light'));
        }
        if (mode === 'light') {
            setMode('dark');
            return localStorage.setItem('mode', JSON.stringify('dark'));
        }
    };

    useEffect(() => {
        if (mode === 'dark') document.body.classList.add('dark');
        else document.body.classList.remove('dark');
    }, [mode]);

    useEffect(() => {
        const localStorageMode = localStorage.getItem('mode');
        if (localStorageMode === JSON.stringify('dark')) setMode('dark');
    }, []);

    useEffect(() => {
        if (router.pathname !== '/') setDashboard(true);
    }, [router.pathname]);

    const Menu = () => {
        return (
            <div
                className={`${menu ? 'fixed' : 'hidden'} top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
            >
                <div
                    className="navbar-backdrop fixed inset-0 bg-slate-950 opacity-50"
                    onClick={toggleMenu}
                />
                <motion.nav
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2, type: 'spring' }}
                    className="relative flex flex-col py-6 px-6 w-full h-full bg-white dark:bg-slate-900 overflow-y-auto"
                >
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-semibold leading-none py-2" href="/">
                            <img src="./favicon.ico" alt="logo" className="w-8 h-8" />
                        </Link>
                        <div className="cursor-pointer" onClick={toggleMenu}>
                            <XMarkIcon className="text-black dark:text-slate-500 w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        {user ? (
                            <ul className="flex flex-col gap-4 pb-2">
                                <li>
                                    <Link
                                        className="py-3 text-slate-500 font-medium text-sm"
                                        href="/dashboard"
                                    >
                                        {dashboardContent}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="py-3 text-slate-500 font-medium text-sm"
                                        href="/account"
                                    >
                                        {accountContent}
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="flex flex-col gap-4 pb-2">
                                {navigationContent.map((element: any, index: number) => (
                                    <li key={index} className="mb-1">
                                        <Link
                                            className="py-3 text-slate-500 font-medium text-sm"
                                            href={element.href}
                                            scroll={false}
                                            onClick={toggleMenu}
                                        >
                                            {element.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {user ? (
                            <button
                                className="rounded-lg w-full block px-4 py-3 text-sm text-center font-semibold leading-none bg-primary text-white my-5"
                                onClick={signOut}
                            >
                                {signOutButtonContent}
                            </button>
                        ) : (
                            <div className="w-full">
                                <Link
                                    className="rounded-lg w-full block px-4 py-3 text-sm text-center font-semibold leading-none bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 my-5"
                                    href="/signin"
                                >
                                    {signInButtonContent}
                                </Link>
                                <Link
                                    className="rounded-lg w-full block px-4 py-3 text-sm text-center font-semibold leading-none bg-primary text-white my-5"
                                    href="/signup"
                                >
                                    {signUpButtonContent}
                                </Link>
                            </div>
                        )}
                        <div className="w-full py-3 cursor-pointer" onClick={toggleMode}>
                            <SunIcon className="w-6 h-6 text-slate-500" />
                        </div>
                    </div>
                </motion.nav>
            </div>
        );
    };

    if (dashboard)
        return (
            <section
                className="absolute left-0 right-0 xl:container mx-auto max-w-8xl px-6 z-50"
                id="navigation"
            >
                <nav className="grid grid-cols-2 py-6">
                    <div className="flex justify-start items-center">
                        <Link
                            className="text-3xl font-semibold leading-none flex items-center justify-start py-2"
                            href="/"
                        >
                            <img src="./favicon.ico" alt="logo" className="w-8 h-8" />
                        </Link>
                    </div>
                    <div className="flex justify-end items-center space-x-4">
                        {user ? (
                            <ul className="hidden lg:flex flex-row items-center justify-center lg:space-x-12">
                                <li>
                                    <Link className="text-slate-500 font-medium" href="/dashboard">
                                        {dashboardContent}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-slate-500 font-medium" href="/account">
                                        {accountContent}
                                    </Link>
                                </li>
                            </ul>
                        ) : null}
                        <div className="px-4 cursor-pointer" onClick={toggleMode}>
                            <SunIcon className="w-6 h-6 text-slate-500" />
                        </div>
                        {user ? (
                            <button
                                className="hidden rounded-lg lg:inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                                onClick={signOut}
                            >
                                {signOutButtonContent}
                            </button>
                        ) : null}
                        <div
                            onClick={toggleMenu}
                            className="cursor-pointer flex lg:hidden items-center px-3"
                        >
                            <Bars2Icon className="text-black dark:text-white w-8 h-8" />
                        </div>
                    </div>
                    <Menu />
                </nav>
            </section>
        );

    return (
        <section className="xl:container mx-auto max-w-8xl px-6 z-50" id="navigation">
            <nav className="grid grid-cols-2 lg:grid-cols-3 py-6">
                <div className="flex justify-start items-center">
                    <Link
                        className="text-3xl font-semibold leading-none flex items-center justify-start py-2"
                        href="/"
                    >
                        <img src="./favicon.ico" alt="logo" className="w-8 h-8" />
                    </Link>
                </div>
                <div className="lg:hidden flex items-center justify-end">
                    <div onClick={toggleMenu} className="cursor-pointer flex items-center px-3">
                        <Bars2Icon className="text-black dark:text-white w-8 h-8" />
                    </div>
                </div>
                <ul className="hidden lg:flex flex-row items-center justify-center lg:space-x-12">
                    {navigationContent.map((element: any, index: number) => (
                        <li key={index} className="mb-1">
                            <Link
                                className="text-slate-500 font-medium"
                                href={element.href}
                                scroll={false}
                            >
                                {element.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-end items-center space-x-4">
                    <div className="px-4 cursor-pointer" onClick={toggleMode}>
                        <SunIcon className="w-6 h-6 text-slate-500" />
                    </div>
                    {user ? (
                        <Link
                            className="rounded-lg inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                            href="/dashboard"
                        >
                            {dashboardButtonContent}
                        </Link>
                    ) : (
                        <div className="flex justify-end items-center space-x-4">
                            <Link className="text-slate-500 font-medium pr-4" href="/signin">
                                {signInButtonContent}
                            </Link>
                            <Link
                                className="rounded-lg inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                                href="/signup"
                            >
                                {signUpButtonContent}
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
            <Menu />
        </section>
    );
};

export default Navigation;
