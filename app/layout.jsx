import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "LagosProperties | Properties in Lagos",
  description: "Find your dream rental propert y",
  keywords: "rental, find rentals, find properties, properties in lagos, lagos properties, rentals in lagos "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
