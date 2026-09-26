import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#ebedf1",
          color: "#1a1d25",
        }}
      >
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "15vh 24px" }}>
          <h1 style={{ fontWeight: 500, letterSpacing: "-0.03em" }}>This page is not here</h1>
          <p>The address may have changed.</p>
          <Link href="/">Back to the main page</Link>
        </main>
      </body>
    </html>
  );
}
