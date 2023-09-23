// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Pagezzzzzzz">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="a forex graph" src="../images/example.png" />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
