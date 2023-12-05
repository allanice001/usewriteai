import useContent from '../utilities/useContent';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="container mx-auto max-w-7xl py-10 px-6" id="faq">
            <div className="mx-auto py-20 text-center bg-primary w-full rounded-lg px-6">
                <h2 className="mb-6 text-4xl md:text-5xl md:leading-[3.5rem] font-extrabold text-white">
                    {useContent('index.cta.title')}
                </h2>
                <p className="text-white mb-6">{useContent('index.cta.description')}</p>
                <Link
                    className="rounded-lg block sm:inline-block border-2 border-white py-3.5 px-7 text-primary text-center font-semibold leading-none bg-white hover:bg-primary hover:text-white duration-200"
                    href="/signin"
                >
                    {useContent('index.cta.button')}
                </Link>
            </div>
        </section>
    );
};

export default CTA;
