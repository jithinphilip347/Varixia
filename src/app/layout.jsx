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
      <head>
        
        {/* Google Tag Manager (GTM) Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NGNNJM9');`
          }}
        />
        
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NGNNJM9"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

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