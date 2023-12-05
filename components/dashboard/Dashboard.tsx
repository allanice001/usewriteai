import { BookmarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Generate from './Generate';
import Previous from './Previous';
import type { User } from 'firebase/auth';
import useContent from '@/utilities/useContent';

interface Props {
    user: User;
    upgrade: () => void;
    upgrading: boolean;
    isUserPremium: boolean;
    freeGenerations: number;
}

const Dashboard = ({ user, upgrade, upgrading, isUserPremium, freeGenerations }: Props) => {
    const [tab, setTab] = useState('generate');
    const loadingUpgradeButtonContent = useContent('dashboard.upgrade-button.loading');
    const defaultUpgradeButtonContent = useContent('dashboard.upgrade-button.default');
    const premiumTagContent = useContent('dashboard.premium-tag-text');
    const remainingContent = useContent('dashboard.remaining');

    const changeTab = (tab: string) => {
        setTab(tab);
    };

    return (
        <section className="container mx-auto max-w-7xl px-6 pt-20 lg:pt-24" id="dashboard">
            <div className="w-full flex flex-col gap-4 py-10">
                <div className="w-full flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, type: 'spring' }}
                        className="flex flex-row flex-wrap gap-6 lg:gap-4 items-center"
                    >
                        <h1 className="w-full lg:w-auto text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white flex flex-grow">
                            {useContent('dashboard.title')}
                        </h1>
                        {isUserPremium ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    type: 'spring',
                                    delay: 0.36,
                                }}
                                className="bg-primary text-white text-sm font-semibold px-3 py-1.5 rounded-lg tracking-wide"
                            >
                                {premiumTagContent}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    type: 'spring',
                                    delay: 0.36,
                                }}
                                className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold px-3 py-1.5 rounded-lg tracking-wide"
                            >
                                {Number(process.env.FREE_GENERATIONS) - freeGenerations} /{' '}
                                {process.env.FREE_GENERATIONS} {remainingContent}
                            </motion.div>
                        )}
                        {isUserPremium ? null : (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    type: 'spring',
                                    delay: 0.36,
                                }}
                                disabled={upgrading}
                                className={`${
                                    upgrading
                                        ? 'bg-slate-300 text-slate-500 dark:bg-slate-800'
                                        : 'bg-primary text-white'
                                } shrink-0 rounded-lg inline-block py-4 px-6 font-semibold leading-none flex flex-row gap-2 items-center`}
                                onClick={upgrade}
                            >
                                <p>
                                    {upgrading
                                        ? loadingUpgradeButtonContent
                                        : defaultUpgradeButtonContent}
                                </p>
                                <BookmarkIcon className="w-4 h-4" />
                            </motion.button>
                        )}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, type: 'spring' }}
                        className="w-full flex flex-row border-b-2 border-slate-300 dark:border-slate-800 mb-4"
                    >
                        <div className="relative">
                            <div
                                onClick={() => changeTab('generate')}
                                className={`${
                                    tab === 'generate'
                                        ? 'text-primary after:bg-primary'
                                        : 'text-slate-500 after:bg-slate-300 after:dark:bg-slate-800'
                                } cursor-pointer font-semibold p-4 after:absolute after:-bottom-[2px] after:-mx-4 after:block after:h-[2px] after:w-full after:content-['']`}
                            >
                                {useContent('dashboard.tabs.generate')}
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                onClick={() => changeTab('previous')}
                                className={`${
                                    tab === 'previous'
                                        ? 'text-primary after:bg-primary'
                                        : 'text-slate-500 after:bg-slate-300 after:dark:bg-slate-800'
                                } cursor-pointer font-semibold p-4 after:absolute after:-bottom-[2px] after:-mx-4 after:block after:h-[2px] after:w-full after:content-['']`}
                            >
                                {useContent('dashboard.tabs.previous')}
                            </div>
                        </div>
                    </motion.div>
                    <AnimatePresence>
                        {tab === 'generate' ? <Generate user={user} /> : <Previous />}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
