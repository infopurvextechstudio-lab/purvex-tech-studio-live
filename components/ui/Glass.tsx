import { ReactNode } from "react";

export default function Glass({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl">
      {children}
    </div>
  );
}