import '../assets/css/main.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Cursor from '../components/home/Cursor';
import ScrollAnimations from '../components/scrollAnimations/ScrollAnimations';
import ScrollWhatsapp from "../components/home/ScrollWhatsapp";

export const metadata = {
  title: "Varixia | Advanced Tech Labs",
  description: "Welcome to Varixia",
    icons: {
    icon: "/images/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Cursor />
          <Navbar />
          <ScrollAnimations />
          {children}
          <Footer />
          <ScrollWhatsapp />
      </body>
    </html>
  );
}
