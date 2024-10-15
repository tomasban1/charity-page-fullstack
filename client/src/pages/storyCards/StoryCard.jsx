import { Header } from '../../components/header/Header';
import styles from './StoryCard.module.css';


export function StoryCard(){
    return (
      <>
        <Header />
        <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img className={styles.storyImg} src="/" alt="pic" />
              <span className={styles.storyText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem corrupti laudantium cum, exercitationem quod velit odio illo assumenda facere. Modi praesentium hic optio quaerat natus facere at, possimus labore eos.</span>
              <ul >
                <li>Norima surinkti suma:</li>
                <li>Jau surinkta</li>
                <li>Liko surinkti</li>
              </ul>
              <p>Jau paaukojo:</p>
            </div>
            <div className={styles.card}>
              <img className={styles.storyImg} src="/" alt="pic" />
              <span className={styles.storyText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem corrupti laudantium cum, exercitationem quod velit odio illo assumenda facere. Modi praesentium hic optio quaerat natus facere at, possimus labore eos.</span>
              <ul >
                <li>Norima surinkti suma:</li>
                <li>Jau surinkta</li>
                <li>Liko surinkti</li>
              </ul>
              <p>Jau paaukojo:</p>
            </div>
        </div>
      </>
    );
}