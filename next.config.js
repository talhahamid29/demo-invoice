/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/login",
        destination: "/auth",
        permanent: false,
      },
      {
        source: "/signup",
        destination: "/signups",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/admins",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/dashboards",
        permanent: false,
      },
      {
        source: "/table",
        destination: "/tables",
        permanent: false,
      },
      {
        source: "/form",
        destination: "/forms",
        permanent: false,
      },
      {
        source: "/calendar",
        destination: "/calendars",
        permanent: false,
      },
      {
        source: "/blogs",
        destination: "/blog1",
        permanent: false,
      },
      {
        source: "/contactus",
        destination: "/contacts",
        permanent: false,
      },
    ];
  },

  images: {
    domains: [
      "tailwindui.com",
      "www.w3.org",
      "images.unsplash.com",
      "ohio.clbthemes.com",
      "demo.rivaxstudio.com",
    ],
  },
};
// next.config.js
module.exports = {
  async middleware() {
    const { middleware } = await import('./src/middleware/authMiddleware');
    return middleware;
  },
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards', // This can be the actual path to your dashboards page
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
