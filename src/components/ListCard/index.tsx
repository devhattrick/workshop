import React from "react";
import styles from "./index.module.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  _text: string;
  _onClickEdit?: any;
  _onClickDelete?: any;
}
const NameComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.contentWrapper}>
          <p className={styles.textList}>{props._text}</p>
          <article className={styles.rowWrapper}>
            <button
              type="button"
              className={styles.btnEdit}
              onClick={() => props._onClickEdit()}
            >
              <EditIcon />
            </button>
            <button
              type="button"
              className={styles.btnDelete}
              onClick={() => props._onClickDelete()}
            >
              <DeleteForeverIcon />
            </button>
          </article>
        </section>
      </div>
    </>
  );
};
export default NameComponent;
