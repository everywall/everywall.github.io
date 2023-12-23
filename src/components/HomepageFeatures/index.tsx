import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Bypass paywalls with ease",
    Svg: require("@site/static/img/brick-wall.svg").default,
    description: (
      <>
        Use the Ladder ruleset, or add your own, to apply custom rules to bypass
        paywalls.
      </>
    ),
  },
  {
    title: "Self-host your own proxy",
    Svg: require("@site/static/img/waypoints.svg").default,
    description: (
      <>
        Host Ladder with Docker or Kubernetes, or run Ladder as a Mac OS,
        Windows or Linux binary.
      </>
    ),
  },
  {
    title: "Custom browsing experience",
    Svg: require("@site/static/img/puzzle.svg").default,
    description: (
      <>
        Apply request and response modifiers to customize how you interact with
        the web.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
