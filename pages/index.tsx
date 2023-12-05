import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import { initFirebase } from '@/firebase';
import Head from 'next/head';
import useContent from '../utilities/useContent';
import Announcement from '@/components/Announcement';

const Page = () => {
    initFirebase();
    const title = useContent('index.page.title');
    const announcementContent = useContent('index.announcement');

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Announcement text={announcementContent} />
            <Navigation />
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
};

export default Page;
