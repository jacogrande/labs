import type { NextPage } from "next";
import Head from "next/head";
import UnderlinePageComponent from "../../PageComponents/Components/Underlines/UnderlinePageComponent";
import { Page } from "../../styles/globals";

const Underline: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Underlines - Jaco Labs</title>
        <meta name="description" content="Underlines suck. Let's fix them." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <UnderlinePageComponent />
      </Page>
    </div>
  );
};

export default Underline;
