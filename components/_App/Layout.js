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
        <link rel="stylesheet" type="text/css" href="/static/styles/main.css" />
        <title>ReactReserve</title>
      </Head>
      <div id="app-wrapper">
        <Header user={user} />
        <Wrapper>
          <Container>{children}</Container>
        </Wrapper>
      </div>
    </>
  );
}

export default Layout;
