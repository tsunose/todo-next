import Link from 'next/link'
import Layout from '../views/components/Layout'

export const Top = (): JSX.Element => {
  return (
    <Layout title="トップページ">
      <div className="container">
        <h1>
          ここは、TOPページです
        </h1>
        <Link href="/todo" as="/todo"><a title="Todo">TODOはこちら</a></Link>
      </div>
    </Layout>
  )
}

export default Top;
