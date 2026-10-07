import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/provider';
export const metadata: Metadata = { title: 'Nova SLT · A little more human', description: 'Your thoughtfully connected recruitment workspace.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" suppressHydrationWarning><body><AppProvider>{children}</AppProvider></body></html>; }
