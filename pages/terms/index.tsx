import useContent from '../../utilities/useContent';
import Head from 'next/head';
import Terms from '@/components/Terms';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { initFirebase } from '@/firebase';

const Page = () => {
    initFirebase();
    const title = useContent('terms.page.title');

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <Terms />
            <Footer />
        </div>
    );
};

export default Page;
