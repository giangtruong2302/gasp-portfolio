import "../global.scss";

export const metadata = {
  title: "Dyno -- Personal Story",
  description: "Generated by Dyno Duong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="html" lang="en">
      <body className="body">
        {/* <div id="smooth-wrapper"> */}
        {/* <div id="smooth-content"> */}
        {children}
        {/* </div> */}
        {/* </div> */}
      </body>
    </html>
  );
}
