import './globals.css';
import type { Metadata } from 'next';
import { Anton, Poppins } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollToTop } from '@/components/scroll-to-top';
import WhatsAppButton from '@/components/whatsapp-button';

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional software developer portfolio showcasing projects and services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.variable} ${poppins.variable} font-poppins bg-background`}>
      {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <WhatsAppButton /> */}
      <ScrollToTop />
      <Toaster />
      {/* </ThemeProvider> */}
    </body>
    </html >
  );
}