import { motion } from 'framer-motion';
import Link from 'next/link';
import useContent from '../utilities/useContent';

const Hero = () => {
    return (
        <section className="container mx-auto max-w-7xl py-20 lg:py-28 px-6" id="hero">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="flex flex-col text-center lg:text-left space-y-8">
                    <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, type: 'spring' }}
                        className="uppercase font-bold text-primary tracking-wider"
                    >
                        {useContent('index.hero.subtitle')}
                    </motion.p>
                    <motion.h2
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            delay: 0.06,
                        }}
                        className="text-6xl md:text-7xl font-extrabold leading-[4rem] md:leading-[5rem] text-black dark:text-white"
                    >
                        {useContent('index.hero.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            delay: 0.12,
                        }}
                        className="text-md text-slate-500 font-medium leading-8 max-w-md mx-auto lg:mx-0"
                    >
                        {useContent('index.hero.description')}
                    </motion.p>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            delay: 0.18,
                        }}
                        className="text-center lg:text-left"
                    >
                        <Link
                            className="rounded-lg block sm:inline-block py-4 px-8 text-white font-semibold leading-none bg-primary"
                            href="/signin"
                        >
                            {useContent('index.hero.button')}
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="w-full"
                >
                    <div className="flex justify-center lg:h-full max-w-xl mx-auto lg:mx-0">
                        <img
                            src={useContent('index.hero.image-light')}
                            className="block dark:hidden w-full"
                            alt="hero"
                        />
                        <img
                            src={useContent('index.hero.image-dark')}
                            className="hidden dark:block w-full"
                            alt="hero"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
