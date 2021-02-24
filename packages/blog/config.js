module.exports = {
  pathPrefix: "",
  siteUrl: "https://blog.ggjungle.vn",
  siteTitle: "GGJungle Blog",
  siteDescription: "https://ggjungle.vn",
  author: "GGJungle Team",
  postsForArchivePage: 3,
  defaultLanguage: "en",
  pages: {
    home: "/",
    blog: "/",
    contact: "contact",
    tag: "tags",
  },
  social: {
    github: "",
    facebook: "",
    twitter: "",
    instagram: "",
    rss: "/rss.xml",
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    "https://getform.io/f/f8975893-3827-4f8d-9a34-266cf13a1295",
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "",
  tags: {
    javascript: {
      name: "javascript",
      description:
        "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
      color: "#f0da50",
    },
    nodejs: {
      name: "Node.js",
      description:
        "Node.js is a tool for executing JavaScript in a variety of environments.",
      color: "#90c53f",
    },
    typescript: {
      name: "typescript",
      description:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      color: "#257acc",
    },
    reactjs: {
      name: "reactjs",
      description:
        "React is an open source JavaScript library used for designing user interfaces.",
      color: "#61dbfa",
    },
    gatsby: {
      name: "Gatsby.js",
      description:
        "A framework built over ReactJS to generate static page web application.  ",
      color: "#6f309f",
    },
    html: {
      name: "HTML",
      description:
        "A markup language that powers the web. All websites use HTML for structuring the content.",
      color: "#dd3431",
    },
    css: {
      name: "css",
      description:
        "CSS is used to style the HTML element and to give a very fancy look for the web application.",
      color: "#43ace0",
    },
    python: {
      name: "python",
      description:
        "A general purpose programming language that is widely used for developing various applications.",
      color: "#f9c646",
    },
    php: {
      name: "php",
      description:
        "An open-source server-side scripting language that can be embedded into HTML to build web applications and dynamic websites.",
      color: "#f9c646",
    },
  },
}
