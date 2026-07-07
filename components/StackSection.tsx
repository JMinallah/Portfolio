import type { ReactNode } from "react";

type StackSectionProps = {
  children: ReactNode;
  zIndex: number;
  id?: string;
  className?: string;
};

export function StackSection({
  children,
  zIndex,
  id,
  className = "",
}: StackSectionProps) {
  return (
    <div
      id={id}
      className={`sticky top-0 flex h-screen flex-col overflow-hidden shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.35)] ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}
