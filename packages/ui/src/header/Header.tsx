"use client";
import { useTheme } from "../hooks/useTheme";

export interface HeaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Header({ children, ...other }: HeaderProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div>
      <header
        className={
          (theme === "dark"
            ? `border-zinc-800 bg-zinc-900`
            : `bg-gray-100/90`) +
          ` w-full backdrop-blur-lg border-b py-0 fixed top:0 left:0 right:0 z-10 w-[100%] opacity-90 flex flex-row align-items-center`
        }
      >
        <div className="flex flex-row w-full items-center mx-auto max-w-[1250px] pt-2">
          {children}
        </div>
      </header>
    </div>
  );
}
