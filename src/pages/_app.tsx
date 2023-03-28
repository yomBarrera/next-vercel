import React,{ ReactElement, ReactNode } from 'react'
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'

type NextPageWhitLayout = NextPage & {
  getLayout?:(page: ReactElement)=>ReactNode;
}

type AppPropsWhitLayout = AppProps & {
  Component: NextPageWhitLayout
}

export default function App({ Component, pageProps }: AppPropsWhitLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />
  return  getLayout( <Component {...pageProps} /> )

}
