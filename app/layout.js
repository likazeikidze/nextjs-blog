import "../styles/globals.css";
import Layout from "../components/layout/Layout";

export const metadata = {
  title: "My Blog",
  description: "A modern Next.js blog project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <div id="notifications"></div>
      </body>
    </html>
  );
}
