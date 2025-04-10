import { ThemeProvider } from "@repo/ui/hooks/useTheme";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./styles.css";
import InterviewHeader from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ThemeProvider>
            <InterviewHeader />
            {children}
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
