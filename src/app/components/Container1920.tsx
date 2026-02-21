import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container1920({
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-480 px-4 md:px-8 ${className}`}
      {...props}
    />
  );
}
