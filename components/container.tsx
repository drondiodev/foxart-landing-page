export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto px-5 md:px-10 lg:px-15 max-w-[80rem] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};
