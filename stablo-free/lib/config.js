// Static site configuration - replace Sanity CMS
export const siteConfig = {
  title: "Stablo",
  description: "A minimal blog template built with Next.js and Tailwind CSS",
  url: "https://iyleah.com",
  copyright: "Stablo",
  logo: null,
  logoalt: null,
  email: "hello@example.com",
  phone: "",
  social: [],
  openGraphImage: "/img/opengraph.jpg"
};

// Placeholder posts for the home page
export const samplePosts = [
  {
    _id: "1",
    title: "Welcome to Your New Site",
    slug: { current: "welcome" },
    excerpt: "This is a sample post to show the layout. You can customize this content.",
    mainImage: null,
    publishedAt: new Date().toISOString(),
    author: {
      name: "Site Author",
      image: null
    },
    categories: [{ title: "General", color: "blue" }]
  },
  {
    _id: "2", 
    title: "Getting Started",
    slug: { current: "getting-started" },
    excerpt: "Learn how to customize your new website and make it your own.",
    mainImage: null,
    publishedAt: new Date().toISOString(),
    author: {
      name: "Site Author",
      image: null
    },
    categories: [{ title: "Tutorial", color: "green" }]
  }
];

// Placeholder authors for the about page
export const sampleAuthors = [
  {
    _id: "1",
    name: "Site Author",
    slug: { current: "author" },
    image: null,
    bio: []
  }
];
