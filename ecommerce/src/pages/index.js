import Products from '@templates/Products';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <Products />
    </>
  );
}
