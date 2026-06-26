import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Professionalz PMS",
  description: "Building great digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased overflow-y-scroll"
    >
      <body className="min-h-full flex flex-col bg-brand-bg-main text-brand-text-primary font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
