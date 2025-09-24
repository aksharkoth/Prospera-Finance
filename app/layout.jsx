export const metadata = {
  title: "Prospera Finance",
  description: "Driving Business Growth with Data-Powered Financial Forecasting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
