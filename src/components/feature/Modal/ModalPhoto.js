import styles from './modal.module.scss';

export function ModalPhoto({ isOpen, close, photoId }) {
  return (
    <>
      {isOpen && (
        <section className={styles.modal}>
          <div className={styles.closeModal}>
            <div onClick={() => close(!isOpen)} className={styles.closeBtn}>
              &times;
            </div>
          </div>
          <div className={styles.modalPhotoBody}>
            <img className={styles.modalPhoto} src={`https://image.tmdb.org/t/p/original/${photoId}`} alt="poster" />
          </div>
        </section>
      )}
    </>
  );
}
