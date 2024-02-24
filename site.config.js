const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Tyrrell B",
    image: "/cyberadvent_logo_black.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Cybersecurity Professional",
    bio: "BSCIA, CASP+, PJPT, SSCP",
    email: "cyberadvent.com@gmail.com",
    linkedin: "tyrrell-brewster",
    github: "TyrrellDMB",
    instagram: "443TRELL",
  },
  projects: [
    {
      name: `CyberAdvent`,
      href: "https://www.beacons.ai/443TRELL",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Cyber-Advent",
    description: "Cyber Advent's Thoughts",
  },

  // CONFIG configration (required)
  link: "https://cyberadvent.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://yt3.googleusercontent.com/15RDpwv8cemoXRNPkKvc3LqoAOm52YNk3slyovurRX5dPdJHq221ZD1L8OFzUUpByiHZlqtCiQ=s176-c-k-c0x00ffffff-no-rj", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
