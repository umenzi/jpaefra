module.exports = {
  host: 'https://www.jpaefra.com',
  sitemap: 'https://www.jpaefra.com/sitemap-index.xml',
  policy: [
    // we will block all the AI bots
    // a nice updated list is: https://darkvisitors.com/agents
    {
      userAgent: 'anthropic-ai',
      disallow: ['/'],
    },
    {
      userAgent: 'Applebot-Extended',
      disallow: ['/'],
    },
    {
      userAgent: 'Bytespider',
      disallow: ['/'],
    },
    {
      userAgent: 'CCBot', // Block Common Crawl
      disallow: ['/'],
    },
    {
      userAgent: 'ChatGPT',
      disallow: ['/'],
    },
    {
      userAgent: 'ChatGPT-User',
      disallow: ['/'],
    },
    {
      userAgent: 'ClaudeBot',
      disallow: ['/'],
    },
    {
      userAgent: 'Claude-Web',
      disallow: ['/'],
    },
    {
      userAgent: 'cohere-ai',
      disallow: ['/'],
    },
    {
      userAgent: 'Diffbot',
      disallow: ['/'],
    },
    {
      userAgent: 'FacebookBot',
      disallow: ['/'],
    },
    {
      userAgent: 'facebookexternalhit',
      disallow: ['/'],
    },
    {
      userAgent: 'FriendlyCrawler',
      disallow: ['/'],
    },
    {
      userAgent: 'AwarioRssBot',
      disallow: ['/'],
    },
    {
      userAgent: 'AwarioSmartBot',
      disallow: ['/'],
    },
    {
      userAgent: 'Google-Extended', // Google Bard & Gemini AI
      disallow: ['/'],
    },
    {
      userAgent: 'GoogleOther',
      disallow: ['/'],
    },
    {
      userAgent: 'GoogleOther-Image',
      disallow: ['/'],
    },
    {
      userAgent: 'GoogleOther-Video',
      disallow: ['/'],
    },
    {
      userAgent: 'GPTBot',
      disallow: ['/'],
    },
    {
      userAgent: 'magpie-crawler',
      disallow: ['/'],
    },
    {
      userAgent: 'ImagesiftBot',
      disallow: ['/'],
    },
    {
      userAgent: 'DataForSeoBot',
      disallow: ['/'],
    },
    {
      userAgent: 'img2dataset',
      disallow: ['/'],
    },
    {
      userAgent: 'OAI-SearchBot',
      disallow: ['/'],
    },
    {
      userAgent: 'omgili',
      disallow: ['/'],
    },
    {
      userAgent: 'omgilibot',
      disallow: ['/'],
    },
    {
      userAgent: 'PerplexityBot',
      disallow: ['/'],
    },
    {
      userAgent: 'PetalBot',
      disallow: ['/'],
    },
    {
      userAgent: 'peer39_crawler',
      disallow: ['/'],
    },
    {
      userAgent: 'Quora-Bot',
      disallow: ['/'],
    },
    {
      userAgent: 'Scrapy',
      disallow: ['/'],
    },
    {
      userAgent: 'Timpibot',
      disallow: ['/'],
    },
    {
      userAgent: 'VelenPublicWebCrawler',
      disallow: ['/'],
    },
    {
      userAgent: 'YouBot',
      disallow: ['/'],
    },
    {
      userAgent: 'TurnitinBot',
      disallow: ['/'],
    },
    {
      userAgent: 'Meta-ExternalAgent',
      disallow: ['/'],
    },
    {
      userAgent: 'Meta-externalagent',
      disallow: ['/'],
    },
    {
      userAgent: 'Meta-ExternalFetcher',
      disallow: ['/'],
    },
    // The following are commented out to ensure correct indexing
    // {
    //   userAgent: "AdsBot-Google",
    //   disallow: ["/"],
    // },
    // {
    //   userAgent: 'Amazonbot',
    //   disallow: ['/'],
    // },
    // {
    //   userAgent: 'Applebot',
    //   disallow: ['/'],
    // },
  ],
};
