import { AppProps } from "next/app";
import React from "react";
import GlobalStyle from "../GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app">
      <GlobalStyle />
      <Component />
    </div>
  );
};

export default MyApp;
