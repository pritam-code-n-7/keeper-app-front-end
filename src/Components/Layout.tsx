import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode; // ReactNode type allows any React node as children
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
