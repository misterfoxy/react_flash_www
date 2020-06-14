import Head from 'next/head'
import Layout from '../components/global/layout'
import {Container, Row, Col} from 'reactstrap'

export default function Home() {
  return (
    <Layout>
    <Container fluid>
    <div className="container">
      <Head>
        <title>Study Fox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className="title">
          Welcome to <a href="https://michaelscottfox.com">Study Fox!</a>
        </h1>


        <div className="grid">
          <a href="/create" className="card">
            <h3>Create Collection &rarr;</h3>
            <p>Create a new collection of flashcards</p>
          </a>

          <a href="/view" className="card">
            <h3>View Collections &rarr;</h3>
            <p>Try out a flashcard collection.</p>
          </a>

         
        </div>
      </main>


    </div>
    </Container>
    </Layout>
  )
}
