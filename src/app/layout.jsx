import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Cursor from '../components/home/Cursor';
import ScrollAnimations from '../components/scrollAnimations/ScrollAnimations';
import ScrollWhatsapp from "../components/home/ScrollWhatsapp";

import '../assets/css/main.css';
import '../assets/css/style.css';

export const metadata = {
  title: "",
  description: "",
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
