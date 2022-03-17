module.exports = {
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "chore", hidden: true },
    { type: "docs", hidden: true },
    { type: "style", hidden: true },
    { type: "refactor", hidden: true },
    { type: "perf", hidden: true },
    { type: "test", hidden: true },
    { type: "ci", hidden: true }
  ],
  commitUrlFormat: "https://github.com/zcmgyu/conventional-commits-demo/commits/{{hash}}",
  compareUrlFormat: "https://github.com/zcmgyu/conventional-commits-demo/compare/{{previousTag}}...{{currentTag}}",
  issueUrlFormat: "https://redmine.humannext.co.jp/issues/{{id}}",
}
