import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import './globals.scss';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'E-Commerce Store',
	description: 'Store'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}
