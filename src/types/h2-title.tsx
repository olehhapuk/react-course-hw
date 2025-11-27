type H2TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H2Title({ children, className = "" }: H2TitleProps) {
  return (
    <h2
      className={`text-shadow-xs font-bold mt-5 pt-5 mb-5 border-t-2 ${className}`}
    >
      {children}
    </h2>
  );
}
