<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/umenzi/jpaefra/main/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  jpaefra.com
</h1>

<p align="center">
  The portfolio website of <a href="https://jpaefra.com" target="_blank">Javier Páez</a>.
</p>
<p align="center">
  Inspired by <a href="https://github.com/bchiang7/v4" target="_blank">Brittany's portfolio website</a>.
</p>

![demo](https://raw.githubusercontent.com/umenzi/jpaefra/main/src/images/demo.png)

# 🚨 Forking this repo (please read!)

Feel free to fork this repository, but please give proper credit by linking back
to both [my work](https://github.com/umenzi/jpaefra) and [Brittany's](https://github.com/bchiang7/v4).
I introduced a lot of changes and improvements that require attribution. Thanks!

Please also note that I did not build this site with the intention of it being a starter theme, so if you have questions
about implementation, please refer to the [Gatsby docs](https://www.gatsbyjs.org/docs/).

# 🛠 Installation & Set Up

## With Docker

1. Run the docker-compose file

   ```sh
   docker-compose up
   ```

## Native

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🎨 Color Reference

The color variables are all defined in `src/styles/variables.js`.

| Color          | Hex                                                                |
|----------------|--------------------------------------------------------------------|
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Red            | ![#e85a4f](https://via.placeholder.com/10/e85a4f?text=+) `#e85a4f` |
| Red tint       | ![#f6bdb9](https://via.placeholder.com/10/f6bdb9?text=+) `#f6bdb9` |

## LightHouse

The website has been optimized for performance, accessibility, best practices, and SEO. The scores are as follows:

![results](https://raw.githubusercontent.com/umenzi/jpaefra/main/src/images/lighthouse_results.png)

## Markdown

Some notes about the markdown files:

- If you want to use iframe elements (e.g., YouTube videos), it is recommended to load them lazily (as they can drain a
  lot of internet data) and provide the height and width (so that Gatsby can scale them responsively). For example:

    ```html
      <iframe
        title="Lebron James ends Jason Terry's life with an alley oop dunk."
        class="lazyload" type="text/html" width="640" height="360"
        data-src="https://www.youtube.com/watch?v=V-QTiByTKaI"
        frameborder="0" allowfullscreen>
      </iframe>
  ```
