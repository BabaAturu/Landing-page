import './globals.css';

export const metadata = {
  title: 'AppNexus - Your All-in-One Mobile Companion',
  description: 'Fast, secure and powerful — AppNexus brings you the best experience with smart features, offline support and a simple design. Download official APK.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
