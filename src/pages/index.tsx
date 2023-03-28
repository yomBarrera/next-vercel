

import React from 'react'
import Link from 'next/link'
// import MainLayout from '@/components/layouts/MainLayout'
import MainLayout from '../components/layouts/MainLayout';


export default function HomePage() {
  return (
  <MainLayout>
      <h1>Home Page</h1>

      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>src/pages/index.js</code>
        </p>
      </div>

      <div className={'grid'}>
        <Link
          href="/abouth"
          className={'card'}
        >
          <h2>Abouth </h2>
        </Link>
        <Link
          href="/contact"
          className={'card'}
        >
          <h2>Contact</h2>
        </Link>

      </div>
  </MainLayout>
  )
}
