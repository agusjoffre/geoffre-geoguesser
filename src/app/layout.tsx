import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Ubuntu_Mono as UBUNTU } from 'next/font/google';
import './globals.css';

const ubuntu = UBUNTU({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Geoffre',
  description: 'A free and open source game of geography guessing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
