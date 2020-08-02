import Head from 'next/head'
import Layout from '../views/components/Layout'

export const Top = (): JSX.Element => {
  return (
    <Layout title="トップページ">
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>
            ここは、TOPページです
          </h1>
        </main>
      </div>
    </Layout>
  )
}

export default Top
