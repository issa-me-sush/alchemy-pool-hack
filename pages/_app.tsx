import dynamic from 'next/dynamic';

const AlchemyProviderWithNoSSR = dynamic(
  () => import('../components/AlchemyProvider'),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <AlchemyProviderWithNoSSR>
      <Component {...pageProps} />
    </AlchemyProviderWithNoSSR>
  );
}

export default MyApp;