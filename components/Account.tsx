import { motion } from 'framer-motion';
import useContent from '../utilities/useContent';

interface Props {
    email: string;
    name: string;
    plan: string;
    openingPortal: boolean;
    openPortal: () => void;
}

const Account = ({ email, name, plan, openingPortal, openPortal }: Props) => {
    const loadingButtonContent = useContent('account.button.loading');
    const defaultButtonContent = useContent('account.button.default');

    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className="max-w-sm w-full flex flex-col items-center gap-4 py-28"
            >
                <h1 className="text-center text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white pb-4">
                    {useContent('account.title')}
                </h1>
                <div className="w-full flex flex-col gap-3">
                    <label htmlFor="email" className="text-sm font-medium text-slate-500">
                        {useContent('account.email-label')}
                    </label>
                    <input
                        defaultValue={email}
                        disabled
                        id="email"
                        type="email"
                        className="bg-slate-50 dark:bg-slate-900 focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 outline-none w-full text-black dark:text-white"
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <label htmlFor="email" className="text-sm font-medium text-slate-500">
                        {useContent('account.name-label')}
                    </label>
                    <input
                        defaultValue={name}
                        disabled
                        id="email"
                        type="email"
                        className="bg-slate-50 dark:bg-slate-900 focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 outline-none w-full text-black dark:text-white"
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <label htmlFor="email" className="text-sm font-medium text-slate-500">
                        {useContent('account.plan-label')}
                    </label>
                    <input
                        defaultValue={plan}
                        disabled
                        id="email"
                        type="email"
                        className="bg-slate-50 dark:bg-slate-900 focus:border-primary dark:focus:border-primary duration-200 rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 outline-none w-full text-black dark:text-white"
                        required
                    />
                </div>
                <div className="w-full flex flex-row items-center">
                    <button
                        disabled={openingPortal}
                        className={`${
                            openingPortal
                                ? 'bg-slate-300 text-slate-500 dark:bg-slate-800'
                                : 'bg-primary text-white'
                        } rounded-lg inline-block py-4 px-8 font-semibold leading-none`}
                        onClick={openPortal}
                    >
                        {openingPortal ? loadingButtonContent : defaultButtonContent}
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Account;
