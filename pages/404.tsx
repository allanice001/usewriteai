import useContent from '../utilities/useContent';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { initFirebase } from '../firebase';
import Link from 'next/link';

const Page = () => {
    initFirebase();
    const title = useContent('404.page.title');

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <div className="min-h-screen flex flex-col justify-center items-center gap-6 container mx-auto max-w-2xl px-6 pt-20 xl:pt-0">
                <img
                    src={useContent('404.image-light')}
                    className="w-full block dark:hidden"
                    alt="404"
                />
                <img
                    src={useContent('404.image-dark')}
                    className="w-full hidden dark:block"
                    alt="404"
                />
                <Link
                    href="/"
                    className="rounded-lg inline-block py-4 px-8 font-semibold leading-none bg-primary text-white"
                >
                    {useContent('404.button')}
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
