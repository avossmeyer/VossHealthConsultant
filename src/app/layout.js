import localFont from "next/font/local";
import './globals.css'
import ClientLayout from './components/layout/ClientLayout';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Disability Claims Consulting",
  description: "Expert guidance for your disability claims journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} antialiased bg-background`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
