import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import homeHero from '../../public/images/home-hero.webp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ClaimBoost Solutions',
  description:
    'Expert supplementing and estimating services to help you secure the highest possible returns on your insurance claims.',
  icon: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  link: [
    {
      rel: 'preload',
      href: homeHero.src,
      as: 'image',
      type: 'image/webp',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
