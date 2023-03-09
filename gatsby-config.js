/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
<<<<<<< HEAD
        name: `trainingModules`,
=======
        name: `trainingModules `,
>>>>>>> 45ea1c266cda6238656dc1cebe090a8722f0c7f1
        // Path to the directory
        path: `${__dirname}/src/trainingModules/`,
      },
    },
  ],
}
