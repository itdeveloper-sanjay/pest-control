import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ScrollToTop from "../../components/ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
