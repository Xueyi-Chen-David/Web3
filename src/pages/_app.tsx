import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import Navbar from "~/components/Navbar";
import { MoralisProvider } from "react-moralis";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {


  return (<>
    <MoralisProvider initializeOnMount={false}>
      <SessionProvider session={session}>
        <Head>
          <title>Web 3.0</title>
          <meta
            name="description"
            content="My web3 project"
          />
          <link rel="icon" href="/saturn.png" />
        </Head>
        <div className="">
          <Navbar />
          <div className="px-8 py-8">
            <Component {...pageProps} />
          </div>
        </div>
      </SessionProvider>
    </MoralisProvider>
  </>
  );
};

export default api.withTRPC(MyApp);
