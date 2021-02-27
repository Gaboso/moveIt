import Head from 'next/head';

import {CompletedChallenges} from 'components/CompletedChallenges';
import {ExperienceBar} from 'components/ExperienceBar';
import {Profile} from 'components/Profile';
import {Countdown} from 'components/Countdown';
import {ChallengeBox} from 'components/ChallengesBox';

import {CountdownProvider} from 'contexts/CountdownContext';

import styles from 'styles/pages/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
