import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}


// import Head from 'next/head'
// import Image from 'next/image'

// import styles from '../styles/Home.module.css'
// import Layout from "../components/Layout";

// export default function Home() {
//   return (
//     <Layout>
//       <div className={styles.container}>
//         <Head>
//           <title>Create Next App</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>

//         <main className={styles.main}>
//           <h1 className={styles.title}>
//             Welcome to <a href="https://nextjs.org">Next.js!</a>
//           </h1>

//           <p className={styles.description}>
//             Get started by editing{' '}
//             <code className={styles.code}>pages/index.js</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h2>Documentation &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h2>Learn &rarr;</h2>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/master/examples"
//               className={styles.card}
//             >
//               <h2>Examples &rarr;</h2>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h2>Deploy &rarr;</h2>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <span className={styles.logo}>
//               <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             </span>
//           </a>
//         </footer>
//       </div>
//     </Layout>
//   )
// }
