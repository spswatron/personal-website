import "../styles/globals.css";
import "../css/spinkit.min.css";
import "../css/TimeLine.scss";
import "../css/Sidebar.scss";
import "../css/modal.scss";
import "../css/stars.css";
import "../css/App.scss";
import "../css/Contact.scss";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import Layout from "../analytics/layout";

function MyApp({ Component, pageProps }) {
  // document.getElementById("__next").width = '100%';
  return (
    <Layout>
      <NextSeo
        description="The personal website and portfolio of Ashley Chang,
      who is a student of Computer Science at Brown University."
        nofollow={true}
      />
      <Head>
        <link rel="icon" href="/apple-touch-icon.png" />

        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
        </style>
        <link href="https://fonts.gstatic.com/" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <title>Ashley Chang</title>
      </Head>
      <style global jsx>{`
        #__next {
          width: 100%;
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
