import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Section from "../components/section";
import Button from "../components/button";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Section>
          <h2 className="my-3 text-3xl">404 Not found.</h2>
          <p>お探しのページは見つかりませんでした。</p>
          <blockquote className="m-3 bg-slate-50 p-3 text-gray-700">
            <span className="italic">
              ❝私はまたどこか別の場所で、ドアだか、雨傘だか、ドーナッツだか、象さんだかのかたちをしたものを探し求めることになるだろう。どこであれ、それが見つかりそうな場所で。❞
              <br />
            </span>
            —『どこであれそれが見つかりそうな場所で』（村上春樹 著）
          </blockquote>
          <div className="my-5">
            <Button text="トップに戻る" linkto="/"></Button>
          </div>
        </Section>
      </Layout>
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 Not found</title>;
