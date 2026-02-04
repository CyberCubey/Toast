import type { Toast as ToastData } from "../../context/ToastContext";


import styles from "./Toast.module.scss";

export function Toast({ toast }: { toast: ToastData }) {
  return ( <div className={`${styles.toast} ${styles[toast.type]}`}> {toast.message} </div>
  );

}
