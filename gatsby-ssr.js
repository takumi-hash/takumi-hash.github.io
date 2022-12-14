exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
      lang: "ja",
      prefix: "og: https://ogp.me/ns#"
  })
}