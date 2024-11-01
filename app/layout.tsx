import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';
import { headers } from 'next/headers';

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'منصة جمعية ديوان الشبابية',
  description: 'المنصة المركزية لإدارة أنشطة جمعية ديوان الشبابية',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const headersList = headers();
  
  return (
    <html lang="ar" dir="rtl">
      <body className={arabic.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}