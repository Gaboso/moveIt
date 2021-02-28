import Head from 'next/head';
import {GetServerSideProps} from 'next';

import {CompletedChallenges} from 'components/CompletedChallenges';
import {ExperienceBar} from 'components/ExperienceBar';
import {Profile} from 'components/Profile';
import {Countdown} from 'components/Countdown';
import {ChallengeBox} from 'components/ChallengesBox';

import {CountdownProvider} from 'contexts/CountdownContext';

import styles from 'styles/pages/Home.module.css';
import {ChallengesProvider} from 'contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  challengesCompleted,
  currentExperience,
  level,
}: HomeProps): JSX.Element {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {level, currentExperience, challengesCompleted} = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
