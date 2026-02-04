import { useToastContext } from "../context/ToastContext";

export function useToast() {
  const { showToast } = useToastContext(); return { showToast };}
