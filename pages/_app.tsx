import '../public/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen">
            <Component {...pageProps} />
        </div>
    );
}
