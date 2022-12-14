import * as React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from "../components/layout"
import Section from "../components/section"
import Button from "../components/button"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Section>
          <h2 className="text-3xl my-3">About</h2>
          <blockquote className="text-gray-700 bg-slate-50 p-3 m-3">
            <span className="italic">❝これだけ多くの人々がこの世界に生きていて、それぞれに他者の中になにかを求めあっていて、なのになぜ我々はここまで孤絶しなくてはならないのだ。❞<br/></span>
            —『スプートニクの恋人』
          </blockquote>
          <p>はじめまして。Futako Book Clubを主宰しているタクミ (<a className="text-salmon" href="https://www.twitter.com/tak_kafka/" target="_blank" rel="noopener noreferrer">@tak_kafka</a>)です。</p>
          <p>このページをご覧になっている方のなかには、「村上春樹さんの作品について語りたい、けれどまわりに語れる人がいない」と感じている方もいらっしゃるのではないでしょうか？</p>
          <p>私も同じ気持ちでした。社会人になってから作品の魅力を改めて発見し、誰かと語り合いたい気持ちが高じてこのFutako Book Clubを定期的に実施しています。</p>
          <p>参加するにあたって、特別な知識や準備は必要ありません。参加者同士、お互いの解釈・意見に耳をかたむけるリラックスした会となるようにしています。</p>
          <p className="pb-4">物語を通じて人とつながる体験をしてみたい方はぜひ参加してみてください。</p>
          <p>「どんなことを話しているのか気になる」方は、Podcastもどうぞ。Book Clubで話した内容をもとに、村上春樹さんの作品に関するおもしろいトピックをお話ししています。</p>
          <div className="my-5">
            <Button text="Podcastを聴いてみる" linkto="https://docs.google.com/forms/d/e/1FAIpQLSdUaKeYQ8UB6tjLoGimejsqPUMI1VBQYulMeaz-67yOlx5nrg/viewform?usp=sf_link"></Button>
          </div>
        </Section>
        <Section color="bg-sub">
          <h2 className="text-3xl my-3">参加するには</h2>
          <p>参加される方は、下記ご確認の上ご連絡ください。</p>
          <ul className="list-disc px-5">
            <li>開催頻度：隔週土曜日　だいたい13:00~14:30</li>
            <li>場所：二子玉川駅周辺
              <ul>
                <li>人数に応じて場所を確保します。</li>
                <li>参加者の方には場所をメールでお知らせします。</li>
              </ul>
            </li>
            <li>参加費用：1,000円／回
              <ul>
                <li>会場費用等に充てさせていただきます。</li>
              </ul>
            </li>
            <li>参加される際は必ずマスクを着用してください。</li>
          </ul>
          <div className="my-5">
            <Button text="参加希望はこちらから" linkto="https://docs.google.com/forms/d/e/1FAIpQLSdUaKeYQ8UB6tjLoGimejsqPUMI1VBQYulMeaz-67yOlx5nrg/viewform?usp=sf_link"></Button>
          </div>
        </Section>
      </Layout>
      <Footer />
    </div>
  )
}

export default AboutPage

export const Head = () => (
  <>
    <Seo>  </Seo>
  </>
)