import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type ToastType = "success" | "error" | "warning";
export type ToastPosition = "top-right" | "bottom-right";



export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  position: ToastPosition; }

interface ToastContextType {
  showToast: (
    message: string,
    type?: ToastType,
    position?: ToastPosition

  ) => void;
  toasts: Toast[];
  removeToast: (id: number) => void;}



const ToastContext = createContext<ToastContextType | null>(null);
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function showToast(
    message: string,
    type: ToastType = "success",
    position: ToastPosition = "top-right" ) { const id = Date.now();

    setToasts((prev) => [
      ...prev, { id, message, type, position }, ]);
    setTimeout(() => {
      removeToast(id);
    }, 3000); }

  function removeToast(id: number) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }




  return (
    <ToastContext.Provider value={{ showToast, toasts, removeToast }}> {children} </ToastContext.Provider> );}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {

    throw new Error("Toast's Error");
  }
  return context;
}
