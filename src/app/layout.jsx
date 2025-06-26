import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Univent - One Platform for All College Events",
  description: "Discover and promote university events in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
