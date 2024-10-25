import Link from "next/link";
import { ReactNode } from "react";

export const Button = ({
  children,
  theme,
  className,
  href,
}: {
  children: ReactNode;
  theme: "primary" | "secondary" | string;
  className?: string;
  href?: string;
}) => {
  const baseClasse = "text-white hover=text-white";
  const themeClasses =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
      ? "bg-n-7 hover:bg-p-3"
      : "";
  const renderButton = () => {
    return (
      <button
        className={`px-3 py-3 rounded-lg button lg:py-4 lg:px-6 ${themeClasses} ${baseClasse} ${className}`}
      >
        {children}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <Link
        href={href}
        className={`inline-block px-3 py-3 no-underline rounded-lg button lg:py-4 lg:px-6 ${themeClasses} ${baseClasse} ${className}`}
      >
        {children}
      </Link>
    );
  };

  return href ? renderLink() : renderButton();
};
