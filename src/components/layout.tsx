interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="max-w-3xl mx-auto px-5 py-5 "> {children} </div>;
}
