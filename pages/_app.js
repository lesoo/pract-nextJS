import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link href="/">홈</Link> | <Link href="/about">회사 소개</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
