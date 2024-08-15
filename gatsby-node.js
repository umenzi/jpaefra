/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);
  const tagTemplate = path.resolve('src/templates/tag.js');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              draft
            }
            fields {
              readingTime {
                minutes
              }
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create blog detail pages
  const posts = result.data.postsRemark.edges;
  const publishedPosts = posts.filter(edge => !edge.node.frontmatter.draft);
  const unpublishedPosts = posts.filter(
    edge => edge.node.frontmatter.draft,
  );

  publishedPosts.forEach((post, index) => {
    const previous =
      index === publishedPosts.length - 1
        ? null
        : publishedPosts[index + 1].node;

    const next = index === 0 ? null : publishedPosts[index - 1].node;

    // let cover = post.node.frontmatter.coverImage;
    // cover = (cover.toLowerCase() === 'none') ? null : cover;
    // let og = post.node.frontmatter.blogOgImage;
    // og = (og.toLowerCase() === 'none') ? null : og;

    createPage({
      path: post.node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        readingTime: post.node.fields.readingTime.minutes,
        previous,
        next,
        // image: cover || og,
      },
    });
  });

  unpublishedPosts.forEach(post => {
    // let cover = post.node.frontmatter.coverImage;
    // cover = (cover.toLowerCase() === 'none') ? null : cover;
    // let og = post.node.frontmatter.blogOgImage;
    // og = (og.toLowerCase() === 'none') ? null : og;

    createPage({
      path: post.node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        readingTime: post.node.fields.readingTime.minutes,
        // image: cover || og,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
