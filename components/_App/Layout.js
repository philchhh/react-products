import Head from "next/head";

import Header from "./Header";
import HeadContent from "./HeadContent";
import Wrapper from "../ui/Wrapper";
import Container from "../ui/Container";

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.css"
        />
        <link rel="stylesheet" type="text/css" href="/static/styles/main.css" />
        <title>ReactReserve</title>
      </Head>
      <Header user={user} />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
}

export default Layout;
