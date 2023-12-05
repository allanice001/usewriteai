import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Alert from '../Alert';
import useContent from '@/utilities/useContent';
import { ClipboardIcon } from '@heroicons/react/20/solid';

const Previous = () => {
    const [removePreviousGenerationsSuccess, setRemovePreviousGenerations] = useState(false);
    const [previousGenerations, setPreviousGenerations] = useState([]);
    const [previousPrompt, setPreviousPrompt] = useState('');
    const [previousResponse, setPreviousResponse] = useState('');
    const previousNotFoundContent = useContent('dashboard.previous-not-found');
    const previousRemovedSuccessContent = useContent('dashboard.previous-removed-success');

    useEffect(() => {
        loadPreviousGenerations();
    }, []);

    const removePreviousGenerations = () => {
        localStorage.setItem('previous', String([]));
        setRemovePreviousGenerations(true);
        setPreviousGenerations([]);
        setPreviousPrompt('');
        setPreviousResponse('');
        setTimeout(() => setRemovePreviousGenerations(false), 2000);
    };

    const loadPreviousGenerations = () => {
        const previousJson = localStorage.getItem('previous');
        const previousGenerations = previousJson ? JSON.parse(previousJson) : [];
        if (previousGenerations.length > 0) {
            setPreviousGenerations(previousGenerations);
        }
    };

    return (
        <motion.div
            key="2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="flex flex-col grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2"
        >
            <div className="w-full flex flex-col gap-4 items-start">
                <label className="font-medium text-sm text-slate-500">
                    {useContent('dashboard.previous-label')}
                </label>
                {previousGenerations.length > 0 ? (
                    <div className="flex flex-col gap-4 w-full">
                        {previousGenerations.map((element: any, index) => {
                            return (
                                <div className="relative w-full duration-100" key={index}>
                                    <input
                                        id="prompt"
                                        className="top-0 left-0 absolute w-full h-full opacity-0 cursor-pointer peer"
                                        type="radio"
                                        name="prompt"
                                        onClick={() => {
                                            setPreviousPrompt(element.prompt);
                                            setPreviousResponse(element.response);
                                        }}
                                    />
                                    <div className="font-medium duration-200 focus:border-primary dark:focus:border-primary rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-slate-50 dark:bg-slate-900 outline-none w-full text-slate-800 dark:text-white peer-checked:border-primary">
                                        {element.prompt}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="py-2 text-slate-500 font-medium">{previousNotFoundContent}</p>
                )}
                <button
                    onClick={removePreviousGenerations}
                    className="shrink-0 rounded-lg w-full lg:w-auto inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                >
                    {useContent('dashboard.remove-previous-button')}
                </button>
                <AnimatePresence>
                    {removePreviousGenerationsSuccess ? (
                        <Alert type="success" message={previousRemovedSuccessContent} />
                    ) : null}
                </AnimatePresence>
            </div>
            <div className="w-full flex flex-col gap-4 items-start">
                <label className="font-medium text-sm text-slate-500">
                    {useContent('dashboard.previous-prompt-label')}
                </label>
                <input
                    disabled={true}
                    id="prompt"
                    value={previousPrompt}
                    className="font-medium duration-200 focus:border-primary dark:focus:border-primary rounded-lg border-2 border-slate-300 dark:border-slate-800 py-3 px-4 bg-slate-50 dark:bg-slate-900 outline-none w-full text-slate-800 dark:text-white"
                    required
                />
                <label className="pt-2 font-medium text-sm text-slate-500">
                    {useContent('dashboard.previous-response-label')}
                </label>
                <div className="h-96 w-full flex items-center justify-center flex-col border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 border-2 rounded-lg overflow-hidden">
                    <p className="font-medium w-full h-full px-4 py-3 text-slate-800 dark:text-white font-medium leading-8">
                        {previousResponse}
                    </p>
                </div>
                <button
                    onClick={() => navigator.clipboard.writeText(previousResponse)}
                    className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 rounded-lg w-full lg:w-auto inline-block py-4 px-6 font-semibold leading-none flex flex-row gap-2 items-center"
                >
                    {useContent('dashboard.copy')}
                    <ClipboardIcon className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
};

export default Previous;
