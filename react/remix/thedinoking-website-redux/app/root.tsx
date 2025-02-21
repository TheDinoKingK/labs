import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative h-full min-h-screen">
        {/* Background Image */}
        {/* <img
          src="https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-3840x2160-5630.jpg"
          className="absolute inset-0 h-full w-full object-cover z-0"
          alt="Background"
        />
 */}
        <div className="relative z-10">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
