import styles from "./formsearch.module.scss";

export function FormSearch({ change, input }) {
  console.log(input);
  return (
    <div className={styles.form}>
      <form>
        <div>
          <input id="search" name="search" type="text" placeholder="Search for a movie, tv show or person..." value={input} onChange={change} />
        </div>
      </form>
    </div>
  );
}
