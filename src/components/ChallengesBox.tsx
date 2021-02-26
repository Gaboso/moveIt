import {useContext} from "react";

import {ChallengesContext} from "../contexts/ChallengesContext";

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ?
          (
            <div className={styles.challengeActive}>
              <header>Get {activeChallenge.amount} xp</header>
              <main>
                <img src={`icons/${activeChallenge.type}.svg`} alt="Icon"/>
                <strong>New Challenge</strong>
                <p>{activeChallenge.description}</p>
              </main>
              <footer>
                <button type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}>
                  Failed
                </button>
                <button type="button"
                        className={styles.challengeSucceededButton}>
                  Succeeded
                </button>
              </footer>
            </div>
          ) : (
            <div className={styles.challengeNotActive}>
              <strong>
                Finish a cycle to receive a challenge
              </strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Go to the next level by completing challenges.
              </p>
            </div>
          )
      }
    </div>
  );
}
