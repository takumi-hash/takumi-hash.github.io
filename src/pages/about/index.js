import * as React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from "../components/layout"
import Section  from "../components/section"
import Button from "../components/button"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Section color="bg-sub">
          <h2 className="text-3xl my-3">About</h2>
          <blockquote className="text-italic text-gray-700 bg-slate-50 p-3 m-3">
            ❝これだけ多くの人々がこの世界に生きていて、それぞれに他者の中になにかを求めあっていて、なのになぜ我々はここまで孤絶しなくてはならないのだ。❞
            —『スプートニクの恋人』
          </blockquote>
        </Section>
        <Section>
          <h2 className="text-3xl my-3">モデレータ</h2>
          <p>私たちが主宰しています。</p>
          <ul className="list-disc px-5">
            <li>Takumi Hashimoto (Twitter: <a className="text-salmon" href="https://www.twitter.com/tak_kafka/">@tak_kafka</a>)
            </li>
            <li>Masataka Ushijima</li>
          </ul>
        </Section>
     </Layout>
      <Footer/>
    </div>
  )
}

export default AboutPage

export const Head = () => (
  <>
  <Seo>  </Seo>
  </>
)