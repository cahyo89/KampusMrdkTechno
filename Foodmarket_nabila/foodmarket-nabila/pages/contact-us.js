import Head from 'next/head'
import Layout from '../src/components/layout'

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Food Market App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="container mx-auto px-5">
        Ini Contact Us Page
      </div>
    </Layout>
  )
}