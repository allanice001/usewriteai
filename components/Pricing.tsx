import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import useContent from '../utilities/useContent';
import Link from 'next/link';

const Pricing = () => {
    const pricingFeaturesContent = useContent('index.pricing.plan-features');

    return (
        <section className="container mx-auto max-w-7xl py-20 px-6" id="pricing">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
            >
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <p className="uppercase font-bold text-primary pb-6 tracking-wider">
                        {useContent('index.pricing.subtitle')}
                    </p>
                    <h2 className="mb-6 text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white">
                        {useContent('index.pricing.title')}
                    </h2>
                    <p className="text-slate-500">{useContent('index.pricing.description')}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div />
                    <div className="w-full">
                        <div className="p-10 px-4 text-center bg-primary rounded-lg">
                            <h3 className="mb-6 text-lg font-medium text-white">
                                {useContent('index.pricing.plan-name')}
                            </h3>
                            <h3 className="mb-8 text-5xl text-white font-bold">
                                {useContent('index.pricing.plan-price')}
                            </h3>
                            <div className="flex flex-col items-center mb-8">
                                <ul className="text-white flex flex-col gap-4">
                                    {pricingFeaturesContent.map((element: any, index: number) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-center"
                                        >
                                            <CheckCircleIcon className="w-5 h-5 mr-2 text-white" />
                                            <span>{element}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <Link
                                    className="rounded-lg block sm:inline-block border-2 border-white py-3.5 px-7 text-primary text-center font-semibold leading-none bg-white hover:bg-primary hover:text-white duration-200"
                                    href="/signin"
                                >
                                    {useContent('index.pricing.plan-button')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div />
                </div>
            </motion.div>
        </section>
    );
};

export default Pricing;
