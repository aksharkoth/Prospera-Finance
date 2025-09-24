import "tailwindcss/tailwind.css";

// app/layout.jsx
import "./globals.css"; // put imports first

export const metadata = {
  title: "Prospera Finance",
  description: "Driving Business Growth with Data-Powered Financial Forecasting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* add a Tailwind class here to confirm Tailwind is loaded */}
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
