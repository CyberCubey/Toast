import { useToastContext } from "../../context/ToastContext";
import { Toast } from "./toast";

import styles from "./Toast.module.scss";
export function ToastContainer() { const { toasts } = useToastContext();

  return ( <> {["top-right", "bottom-right"].map((position) =>
  ( <div key={position} className={`${styles.container} ${styles[position]}`} > {

toasts
.filter((t) => t.position === position) .map((toast) => (
 <Toast key={toast.id} toast={toast} /> ))}
 </div>
    ))}
    </>
    
  );
}


