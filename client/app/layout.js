import "@styles/globals.css";
import Nav from "@components/Nav";
import AuthProvider from "@components/AuthProvider";

export const metadata = {
  title: "my everything app",
  description: "I want to put everything here, into different routes",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <AuthProvider>
        <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
