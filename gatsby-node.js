exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/pages/Home.jsx"),
    context: {},
    defer: true,
  })
}
