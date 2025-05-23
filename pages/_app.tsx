// pages/_app.tsx
import type { AppProps } from 'next/app';
// import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <header>공통 헤더</header>
            <Component {...pageProps} />
            <footer>공통 푸터</footer>
        </>
    );
}
