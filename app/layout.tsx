import "./globals.css";

export const metadata = {
  title: "NEX — Your AI Analyst for M&A",
  description: "An AI analyst for M&A that stays in context — a consistent counterpart across your deal work.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
