interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="max-w-3xl mx-auto px-2 py-8">{children}</div>;
}
