import useContent from '@/utilities/useContent';
import { motion } from 'framer-motion';

interface Props {
    title: string;
    description: string;
}

const Term = ({ title, description }: Props) => {
    return (
        <div className="w-full duration-200">
            <h3 className="mb-4 font-bold text-xl text-black dark:text-white leading-8">{title}</h3>
            <p className="text-slate-500 leading-7">{description}</p>
        </div>
    );
};

const Terms = () => {
    const termsContent = useContent('terms.terms');

    return (
        <section className="container mx-auto max-w-7xl px-6 pt-20 lg:pt-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className="w-full flex flex-col gap-4 py-10"
            >
                <h1 className="text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white">
                    {useContent('terms.title')}
                </h1>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className="flex flex-col py-10 gap-10"
            >
                {termsContent.map((element: any, index: number) => (
                    <Term key={index} title={element.title} description={element.description} />
                ))}
            </motion.div>
        </section>
    );
};

export default Terms;
