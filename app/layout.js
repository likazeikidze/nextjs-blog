import "../styles/globals.css";

export const metadata = {
  title: "My Blog",
  description: "A modern Next.js blog project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
