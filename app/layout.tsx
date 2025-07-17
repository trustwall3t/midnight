import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Midnight TGE | Home',
	description:
		'Welcome to the future of digital innovation. Explore cutting-edge technology and creative solutions.',
	keywords:
		'technology, innovation, digital, midnight, creative, development',
	authors: [{ name: 'Midnight Team' }],
	viewport: 'width=device-width, initial-scale=1',
	themeColor: '#020617',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className='light'
		>
			<head>
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `
						var _smartsupp = _smartsupp || {};
_smartsupp.key = '40bee82a9625c8601c76aace484453964309bcb8';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
						`,
					}}
				/>
				<link rel="icon" href="/logo.svg" />
			</head>
			<body className={`${inter.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
