import '../styles/globals.css';
import '../styles/design-system.css';
import { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = { 
  title: 'MSC ECU Club | Microsoft Student Club at Egyptian Chinese University',
  description: 'Microsoft Student Club at Egyptian Chinese University - Empowering students through technology, workshops, hackathons, networking events, and career development opportunities.',
  keywords: 'Microsoft Student Club, ECU, Egyptian Chinese University, tech club, coding, programming, hackathon, student organization',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}