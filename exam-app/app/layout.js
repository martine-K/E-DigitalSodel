import "./globals.css";


export const metadata = {
  title: "Exam Assistant",
  description: "Created by Exam H",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
