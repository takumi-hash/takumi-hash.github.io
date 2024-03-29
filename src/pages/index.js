import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Section from "../components/section";
import Button from "../components/button";
import Seo from "../components/seo";
import Qrcode from "../images/ig_code.webp";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Layout>
        <Section>
          <h2 className="my-3 text-3xl">活動紹介</h2>
          <p>
            Instagramアカウント
            <a
              className="text-salmon"
              href="https://www.instagram.com/futako_book_club/"
            >
              @futako_book_club
            </a>
            で活動の様子をご覧ください。
          </p>
          <img
            width="800"
            height="800"
            className="h-48 object-contain"
            src={Qrcode}
            alt="Futako Book Club Instagram"
          />
        </Section>
        <Section color="bg-sub">
          <h2 className="my-3 text-3xl">参加するには</h2>
          <p className="font-bold">
            現在、当ページにおける新規メンバー募集は中止しております。
          </p>
        </Section>
        <Section>
          <h2 className="my-3 text-3xl">モデレータ</h2>
          <ul className="list-disc px-5">
            <li>
              Takumi Hashimoto (Twitter:{" "}
              <a
                className="text-salmon"
                href="https://www.twitter.com/tak_kafka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tak_kafka
              </a>
              )
            </li>
          </ul>
        </Section>
        <Section color="bg-sub">
          <h2 className="my-3 text-3xl">ブッククラブで扱った作品</h2>
          <table className="w-full table-auto text-left">
            <thead className="bg-slate-100">
              <tr>
                <th colSpan="2">長編作品</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">作品名</th>
                <th scope="col">実施日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>風の歌を聴け</td>
                <td>2023/01/28</td>
              </tr>
              <tr>
                <td>1973年のピンボール</td>
                <td>2022/10/01</td>
              </tr>
              <tr>
                <td>羊をめぐる冒険</td>
                <td>2022/02/22</td>
              </tr>
              <tr>
                <td>世界の終りとハードボイルド・ワンダーランド</td>
                <td>2022/04/16</td>
              </tr>
              <tr>
                <td>ノルウェイの森</td>
                <td>2022/12/18</td>
              </tr>
              <tr>
                <td>ダンス・ダンス・ダンス</td>
                <td>2022/03/12</td>
              </tr>
              <tr>
                <td>国境の南、太陽の西</td>
                <td>2022/04/02</td>
              </tr>
              <tr>
                <td>ねじまき鳥クロニクル</td>
                <td>2021/12/11</td>
              </tr>
              <tr>
                <td>スプートニクの恋人</td>
                <td>2022/01/09</td>
              </tr>
              <tr>
                <td>海辺のカフカ</td>
                <td>2022/07/23</td>
              </tr>
              <tr>
                <td>アフターダーク</td>
                <td>2021/10/16</td>
              </tr>
              <tr>
                <td>1Q84</td>
                <td>2022/06/25</td>
              </tr>
              <tr>
                <td>色彩を持たない多崎つくると、彼の巡礼の年</td>
                <td>2021/09/18</td>
              </tr>
              <tr>
                <td>騎士団長殺し</td>
                <td>2022/09/18</td>
              </tr>
              <tr>
                <td>街とその不確かな壁</td>
                <td>2023/04/15</td>
              </tr>
              <tr>
                <td>...</td>
              </tr>
            </tbody>
            <thead className="bg-slate-100">
              <tr>
                <th colSpan="2">短編集</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">作品名</th>
                <th scope="col">実施日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>中国行きのスロウ・ボート</td>
                <td>2022/08/06</td>
              </tr>
              <tr>
                <td>カンガルー日和</td>
                <td>2022/06/11</td>
              </tr>
              <tr>
                <td>螢・納屋を焼く・その他の短編</td>
                <td>2022/02/12</td>
              </tr>
              <tr>
                <td>回転木馬のデッド・ヒート</td>
                <td>2022/01/29</td>
              </tr>
              <tr>
                <td>パン屋再襲撃</td>
              </tr>
              <tr>
                <td>TVピープル</td>
                <td>2022/07/10</td>
              </tr>
              <tr>
                <td>レキシントンの幽霊</td>
                <td>2022/08/20</td>
              </tr>
              <tr>
                <td>神の子どもたちはみな踊る</td>
                <td>2021/10/30</td>
              </tr>
              <tr>
                <td>象の消滅 短篇選集 1980-1991</td>
                <td>2021/11/27</td>
              </tr>
              <tr>
                <td>東京奇譚集</td>
                <td>2022/05/15</td>
              </tr>
              <tr>
                <td>はじめての文学 村上春樹</td>
              </tr>
              <tr>
                <td>めくらやなぎと眠る女</td>
                <td>2023/08/30</td>
              </tr>
              <tr>
                <td>女のいない男たち</td>
                <td>2021/11/13</td>
              </tr>
              <tr>
                <td>一人称単数</td>
                <td>2022/10/15</td>
              </tr>
              <tr>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </Layout>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <Seo> </Seo>
  </>
);
