
import React from 'react'
import Link from 'next/link'

import MainLayout from '../components/layouts/MainLayout'
import LightLayout from '../components/layouts/LightLayout'

export default function AboutPage() {
  return (
  <>
    <h1>Abouth Page</h1>

    <div className={'description'}>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>src/pages/abouth.js</code>
      </p>
    </div>

    <div className={'grid'}>
      <Link
        href="/"
        className={'card'}
      >
        <h2>Home</h2>
      </Link>
      <Link
        href="/contact"
        className={'card'}
      >
        <h2>Contact</h2>
      </Link>

    </div>
  </>
  )
}

AboutPage.getLayout = function getLayout( page:JSX.Element ) {
  return (
    <MainLayout>
      <LightLayout>
        {page}
      </LightLayout>
    </MainLayout>
  )
  
}