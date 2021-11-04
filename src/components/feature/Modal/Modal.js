import styles from "./modal.module.scss";

export function Modal({ isOpen, close, id }) {
  console.log(id);
  return (
    <>
      {isOpen && (
        <section className={styles.modal}>
          <div onClick={() => close(!isOpen)} className={styles.closeBtn}>
            &times;
          </div>
          <div className={styles.modalBody}>
            <iframe
              className={styles.modalVideo}
              width="560"
              height="315"
              loading="lazy"
              src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}
    </>
  );
}
