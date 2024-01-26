import "@styles/globals.css";
import Nav from "@app/components/Nav";

export const metadata = {
  title: "my everything app",
  description: "I want to put everything here, into different routes",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
