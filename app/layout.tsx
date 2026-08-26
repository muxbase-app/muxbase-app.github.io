import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muxbase-app.github.io'),
  title: 'MuxBase — Mission control for AI coding agents',
  description:
    'Run Claude Code, Codex, OpenCode, and Pi in parallel with tmux, Git worktrees, live activity, diff review, and guided merge workflows.',
  applicationName: 'MuxBase',
  authors: [{ name: 'MuxBase contributors' }],
  category: 'DeveloperApplication',
  keywords: [
    'AI coding agents',
    'Claude Code',
    'Codex',
    'OpenCode',
    'tmux',
    'Git worktrees',
    'developer tools',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/muxbase-icon.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    locale: 'en_US',
    siteName: 'MuxBase',
    title: 'MuxBase — Mission control for AI coding agents',
    description:
      'Run and review multiple AI coding agents from one macOS desktop app.',
    images: [
      {
        url: '/og.png',
        width: 1280,
        height: 640,
        alt: 'MuxBase managing multiple AI coding agents in Fleet view',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MuxBase — Mission control for AI coding agents',
    description:
      'Run and review multiple AI coding agents from one macOS desktop app.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
