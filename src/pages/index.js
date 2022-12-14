import * as React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import Jumbotron from "../components/jumbotron.js"
import Layout from "../components/layout.js"
import Section  from "../components/section.js"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Jumbotron/>
      <Layout>
        <Section>
          <h2 className="text-3xl font-bold underline">Heading Text</h2>
        </Section>
        <Section color="bg-sub">
          <h2 className="text-3xl font-bold underline">Heading Text</h2>
        </Section>
      </Layout>
      <Footer/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Page Title</title>
