import useContent from '@/utilities/useContent';
import Link from 'next/link';

const Footer = () => {
    const navigationContent = useContent('footer.navigation.items');
    const socialsContent = useContent('footer.socials.items');
    const termsContent = useContent('footer.terms.items');

    return (
        <section className="container mx-auto max-w-7xl py-20 px-6" id="footer">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    <div className="flex flex-col py-6 items-center lg:items-start">
                        <div className="flex flex-row gap-4 items-center">
                            <img src="./favicon.ico" alt="logo" className="w-8 h-8" />
                            <a className="text-lg font-bold text-black dark:text-white" href="#">
                                {useContent('footer.name')}
                            </a>
                        </div>
                        <div className="flex-grow items-end hidden lg:flex">
                            <p className="text-slate-500">{useContent('footer.copyright')}</p>
                        </div>
                    </div>
                    <div className="py-6 grid grid-cols-1 sm:grid-cols-3 space-y-10 sm:space-y-0 text-center lg:text-left">
                        <div>
                            <h5 className="mb-6 text-lg font-bold text-black dark:text-white">
                                {useContent('footer.navigation.title')}
                            </h5>
                            <ul className="space-y-4">
                                {navigationContent.map((element: any, index: number) => (
                                    <li key={index}>
                                        <Link
                                            className="text-slate-500"
                                            href={element.href}
                                            scroll={false}
                                        >
                                            {element.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="mb-6 text-lg font-bold text-black dark:text-white">
                                {useContent('footer.socials.title')}
                            </h5>
                            <ul className="space-y-4">
                                {socialsContent.map((element: any, index: number) => (
                                    <li key={index}>
                                        <Link className="text-slate-500" href={element.href}>
                                            {element.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="mb-6 text-lg font-bold text-black dark:text-white">
                                {useContent('footer.terms.title')}
                            </h5>
                            <ul className="space-y-4">
                                {termsContent.map((element: any, index: number) => (
                                    <li key={index}>
                                        <Link className="text-slate-500" href={element.href}>
                                            {element.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
