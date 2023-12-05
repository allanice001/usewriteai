import Link from 'next/link';
import useContent from '../utilities/useContent';

const Features = () => {
    return (
        <section className="container mx-auto max-w-7xl pt-10 pb-20 px-6" id="features">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                <div className="w-full">
                    <div className="flex justify-center max-w-xl mx-auto">
                        <img
                            src={useContent('index.features.image-light')}
                            className="m-auto block dark:hidden w-full"
                            alt="features"
                        />
                        <img
                            src={useContent('index.features.image-dark')}
                            className="m-auto hidden dark:block w-full"
                            alt="features"
                        />
                    </div>
                </div>
                <div className="flex flex-col text-center lg:text-left space-y-6">
                    <p className="uppercase font-bold text-primary tracking-wider">
                        {useContent('index.features.subtitle')}
                    </p>
                    <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-black dark:text-white">
                        {useContent('index.features.title')}
                    </h2>
                    <p className="text-md text-slate-500 font-medium leading-8 max-w-md mx-auto lg:mx-0">
                        {useContent('index.features.description')}
                    </p>
                    <div className="text-center lg:text-left">
                        <Link
                            className="rounded-lg block sm:inline-block py-4 px-8 text-white font-semibold leading-none bg-primary"
                            href="/signin"
                        >
                            {useContent('index.features.button')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
