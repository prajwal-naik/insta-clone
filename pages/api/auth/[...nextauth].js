// import NextAuth from "next-auth"
// // import GoogleProvider from "next-auth/providers/google"
// import Providers from "next-auth/providers";

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   pages: {
//       signIn: "/auth/signin",
//   },
// //   theme: {
// //       logo: "https://links.papareact.com/sqB",
// //       brandColor: "#F13287",
// //       colorScheme: "auto",
// //   },
// });

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default (req, res) => NextAuth(req, res, options);