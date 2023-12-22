import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/pigeon.svg"
          className="hero__logo"
          width={200}
          alt="Ladder pigeon logo"
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/introduction"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePageBody() {
  return <p className="text--center">INSERT SCREENSHOT OF LADDER</p>;
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomePageBody />
      </main>
    </Layout>
  );
}
