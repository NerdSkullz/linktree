try {
  require("dotenv").config()
} catch {}

module.exports = {
  siteMetadata: {
    title: `Linktree Code Challenge`,
    description: `Linktree Code Challenge.`,
    author: `Pietro Di Marzo - NerdSkullz`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    }
  ],
}
