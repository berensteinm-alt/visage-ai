import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Visage AI',
  description: 'AI-powered headshot generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
