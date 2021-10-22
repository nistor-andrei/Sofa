import tmdbLogo from '../../assets/icons/blue_square_2.svg';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopy}>
        <span>&copy; 2021</span>
        Data provided by
        <a href="https://www.themoviedb.org/">
          <img src={tmdbLogo} alt="tmdb-logo" />
        </a>
      </div>
    </footer>
  );
}
