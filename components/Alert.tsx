import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

interface Props {
    message: string;
    type: 'success' | 'error';
}

const Alert = ({ message, type }: Props) => {
    if (type === 'success')
        return (
            <motion.div
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 5, opacity: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                className="w-full bg-emerald-500 flex flex-row gap-2 items-center px-3 py-2 rounded-lg"
            >
                <CheckCircleIcon className="text-white w-6 h-6" />
                <p className="w-full font-medium text-white text-sm">{message}</p>
            </motion.div>
        );

    return (
        <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="w-full bg-rose-500 flex flex-row gap-2 items-center px-3 py-2 rounded-lg"
        >
            <ExclamationCircleIcon className="text-white w-6 h-6" />
            <p className="w-full font-medium text-white text-sm">{message}</p>
        </motion.div>
    );
};

export default Alert;
