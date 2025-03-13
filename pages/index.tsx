import { memo } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Typography, Container } from "@material-ui/core";

import Header from "components/Header";
import Footer from "components/Footer";
import Contact from "components/Contact";
import Certifications from "components/Certifications";
import Testimonials from "components/Testimonials";
import FeaturedProjects from "components/Projects/FeaturedProjects";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Soundarya Lahari</title>
      </Head>
      <motion.div
        key="index"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <>
          <Header />
          <Certifications />
          <FeaturedProjects />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      </motion.div>
    </>
  );
};

export default memo(IndexPage);
