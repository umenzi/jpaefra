const config = require('./src/config');
const path = require('node:path');

module.exports = {
  siteMetadata: {
    title: 'Javier Paez Franco',
    description: 'Javier Paez is a researcher specialized in Machine Learning and Robot Learning.',
    siteUrl: 'https://jpaefra.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    social: {
      twitter: '@jpaefra',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js',
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        domain: 'api.jpaefra.com',
        eventsGlobal: 'sa',
        events: true,
        trackPageViews: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Javier Paez Franco',
        short_name: 'Javier Paez',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
        icons: [
          {
            src: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: {
                site,
                allMarkdownRemark,
              },
            }) => allMarkdownRemark.nodes.map(
              node => Object.assign({}, node.frontmatter, {
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  filter: {
                    fileAbsolutePath: { regex: "/content/blog/" }
                    frontmatter: { draft: { ne: true } }
                  }
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
                    frontmatter {
                      title
                      date
                      slug
                    }
                    excerpt
                    html
                  }
                }
              }
            `,
            output: 'index.xml',
            title: 'Jpaefra RSS Feed',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content/'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Blog`,
        path: path.join(__dirname, 'content/blog'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, 'content/projects'),
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        // we include all paths under the "/blog" route
        includePaths: [{ regex: '^/blog' }],
        height: 3,
        prependToBody: false,
        color: `#e85a4f`, // --red variable
        footerHeight: 500,
        headerHeight: 0,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-reading-time`,
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              withWebp: true,
            },
          },
          {
            // https://www.gatsbyjs.com/plugins/gatsby-remark-smartypants/
            resolve: `gatsby-remark-smartypants`,
          },
          {
            // https://www.gatsbyjs.com/plugins/gatsby-remark-katex/
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
            resolve: 'gatsby-remark-code-titles',
          }, // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            // https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/
            resolve: `gatsby-remark-autolink-headers`,
          }, // IMPORTANT: this must be ahead of the prism plugin, if present
          {
            // https://github.com/thundermiracle/gatsby-remark-prismjs-copy-button
            resolve: `gatsby-remark-prismjs-copy-button`,
          }, // IMPORTANT: this must be ahead of the prism plugin, if present
          {
            // https://www.gatsbyjs.com/plugins/gatsby-remark-responsive-iframe/?=gatsby-remark-responsive-iframe
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            // https://www.gatsbyjs.com/plugins/gatsby-remark-lazy-load/?=gatsby-remark-lazy-load
            resolve: `gatsby-remark-lazy-load`,
          },
          {
            // https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-links/?=gatsby-plugin-catch-links
            resolve: `gatsby-plugin-catch-links`,
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g., for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e., single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in Markdown i.e., single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extends an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
  ],
};

