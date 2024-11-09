import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '資深鏟屎官',
    Svg: require('@site/static/img/undraw_cat_epte.svg').default,
    description: (
      <>
      雖然我 (還) 沒養貓，但是有過一年的鏟屎經驗，應該也算資深鏟屎官 嗎
      </>
    ),
  },
  {
    title: 'Junior SWE!',
    Svg: require('@site/static/img/undraw_code_typing_re_p8b9.svg').default,
    description: (
      <>
        2024/6月 正式成為社畜，不知道我會先變成 senior 還是先被 AI 取代..
      </>
    ),
  },
  {
    title: '📖 光',
    Svg: require('@site/static/img/undraw_read_notes_gqmq.svg').default,
    description: (
      <>
      喜歡讀書與筆記 (雖然很懶)，或許能在府中誠品遇到我...
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
