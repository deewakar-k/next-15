import Navbar from "@/components/navbar";
import { Providers } from "./provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Navbar />
      {children}
    </Providers>
  );
}
