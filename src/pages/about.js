import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Section from "../components/section";
import Button from "../components/button";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Section>
          <h2 className="my-3 text-3xl">About</h2>
          <blockquote className="m-3 bg-slate-50 p-3 text-gray-700">
            <span className="italic">
              ❝これだけ多くの人々がこの世界に生きていて、それぞれに他者の中になにかを求めあっていて、なのになぜ我々はここまで孤絶しなくてはならないのだ。❞
              <br />
            </span>
            —『スプートニクの恋人』（村上春樹 著）
          </blockquote>
          <p>
            はじめまして。Futako Book Clubを主宰しているタクミ (
            <a
              className="text-salmon"
              href="https://www.twitter.com/tak_kafka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tak_kafka
            </a>
            )です。
          </p>
          <p>
            このページをご覧になっている方のなかには、「村上春樹さんの作品について語りたい、けれどまわりに語れる人がいない」と感じている方もいらっしゃるのではないでしょうか？
          </p>
          <p>
            私も同じ気持ちでした。社会人になってから作品の魅力を改めて発見し、誰かと語り合いたい気持ちが高じてこのFutako
            Book Clubを定期的に実施しています。
          </p>
          <p>
            参加するにあたって、特別な知識や準備は必要ありません。参加者同士、お互いの解釈・意見に耳をかたむけるリラックスした会となるようにしています。
          </p>
          <p className="pb-4">
            物語を通じて人とつながる体験をしてみたい方はぜひ参加してみてください。
          </p>
          <p>
            「どんなことを話しているのか気になる」方は、Podcastもどうぞ。Book
            Clubで話した内容をもとに、村上春樹さんの作品に関するおもしろいトピックをお話ししています。
          </p>
          <div className="my-5">
            <Button
              text="Podcastを聴いてみる"
              linkto="https://anchor.fm/futakobookcast/"
            ></Button>
          </div>
        </Section>
        <Section color="bg-sub">
          <h2 className="my-3 text-3xl">参加するには</h2>
          <p className="font-bold">現在、当ページにおける新規メンバー募集は中止しております。</p>
        </Section>
      </Layout>
      <Footer />
    </div>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <Seo> </Seo>
  </>
);
