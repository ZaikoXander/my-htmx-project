import { ReactNode } from 'react';

export interface ButtonProps {
  'hx-post'?: string;
  'hx-swap'?: string;
  'hx-target'?: string;
  className?: string;
  children?: ReactNode;
}

export default function Button({
  'hx-post': hxPost,
  'hx-swap': hxSwap,
  'hx-target': hxTarget,
  className,
  children,
}: ButtonProps) {
  return (
    <button
      hx-post={hxPost}
      hx-swap={hxSwap}
      hx-target={hxTarget}
      className={`rounded bg-blue-500 px-2 py-1 ${className}`}
    >
      {children}
    </button>
  );
}
