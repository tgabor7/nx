import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

const MyApp: AppType<
  typeof trpc & {
    session: Session;
  }
> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (<SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>);
};

export default trpc.withTRPC(MyApp);