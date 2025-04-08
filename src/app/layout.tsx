// Component: RootLayout

// Imports - scripts (node)
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// Types
export type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

// Settings
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
	title: 'Create Next App',
	description: 'Generated by create next app',
};

// Component
export default function RootLayout(props: RootLayoutProps) {
	// Props
	const { children } = props;

	// Render default
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} text-center antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
