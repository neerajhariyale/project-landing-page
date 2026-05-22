import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
