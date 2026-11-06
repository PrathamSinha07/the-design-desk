import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = { title: 'The Design Desk — School of Design', description: 'News, People and Processes from School of Design. Volume 01, Issue 01, November 2026.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Navbar />{children}</body></html>; }
