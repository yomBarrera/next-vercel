import React from 'react'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
  <MainLayout>
    <h1>Contact Page</h1>

    <div className={'description'}>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>src/pages/contact.js</code>
      </p>
    </div>

    <div className={'grid'}>
      <Link
        href="/abouth"
        className={'card'}
      >
        <h2>Abouth</h2>
      </Link>
      <Link
        href="/"
        className={'card'}
      >
        <h2 >Home</h2>
      </Link>

    </div>
  </MainLayout>
  )
}
