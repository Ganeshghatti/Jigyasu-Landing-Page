import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const source = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Jigyasu",
  description: "Learning by doing",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${source.className}`}>
      <body>{children}</body>
    </html>
  );
}
