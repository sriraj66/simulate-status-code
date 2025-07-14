import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <>
      <Head>
        <title>HTTP Status Code Viewer | Test & Simulate HTTP Responses</title>
        <link rel="icon" href="https://sriraj66.github.io/img/sriram.png" />
        <meta
          name="description"
          content="A simple developer tool to simulate and test real HTTP response codes like 404, 500, 301, etc. Perfect for debugging and learning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sriram Rajagopalan" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HTTP Status Code Viewer" />
        <meta
          property="og:description"
          content="Simulate and test real HTTP response codes for debugging and frontend development."
        />
        <meta property="og:url" content={origin || "https://simulatehttpcode.vercel.app"} />
        <meta
          property="og:image"
          content={`${origin || "https://simulatehttpcode.vercel.app"}/preview.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HTTP Status Code Viewer" />
        <meta
          name="twitter:description"
          content="A tool to simulate HTTP responses like 404, 500, and more for frontend debugging."
        />
        <meta
          name="twitter:image"
          content={`${origin || "https://simulatehttpcode.vercel.app"}/preview.png`}
        />

        <link rel="canonical" href={origin || "https://simulatehttpcode.vercel.app"} />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K3D64XNLG6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K3D64XNLG6');
      `,
          }}
        />
      </Head>

      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          padding: "2em",
          lineHeight: "1.6",
          maxWidth: "720px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h1 style={{ fontSize: "2em", color: "#333" }}>
          📡 HTTP Status Code Viewer
        </h1>

        <p>
          This is a simple developer tool to simulate and test{" "}
          <strong>real HTTP response codes</strong>.
        </p>

        <h2>What can you do?</h2>
        <ul style={{ paddingLeft: "1.2em" }}>
          <li>
            Simulate HTTP responses like <code>500</code>, <code>404</code>,{" "}
            <code>301</code>, etc.
          </li>
          <li>
            See actual HTTP status in browser <strong>Network tab</strong>
          </li>
          <li>Get explanation + example JavaScript to handle each code</li>
          <li>Great for debugging status code behavior in frontend apps</li>
        </ul>

        <h2>How to use it</h2>
        <ol style={{ paddingLeft: "1.2em" }}>
          <li>
            Visit <Link href="/statuscode">/statuscode</Link> to see the list of
            all available HTTP status codes
          </li>
          <li>Click any code to simulate a real server response</li>
          <li>
            Check your browser’s DevTools → Network tab to verify the returned
            status
          </li>
          <li>
            Use the code sample shown to test status handling in JavaScript
          </li>
        </ol>

        <h2>Quick Examples</h2>
        <ul style={{ paddingLeft: "1.2em" }}>
          <li>
            <Link href="/statuscode?q=200">Simulate 200 OK</Link>
          </li>
          <li>
            <Link href="/statuscode?q=404">Simulate 404 Not Found</Link>
          </li>
          <li>
            <Link href="/statuscode?q=500">
              Simulate 500 Internal Server Error
            </Link>
          </li>
        </ul>

        <p style={{ marginTop: "2em" }}>
          👉{" "}
          <Link
            href="/statuscode"
            style={{ fontWeight: "bold", fontSize: "1.1em", color: "#0070f3" }}
          >
            Browse all HTTP status codes
          </Link>
        </p>

        <hr style={{ margin: "3em 0", borderTop: "1px solid #ccc" }} />

        <footer style={{ fontSize: "0.95em", color: "#555" }}>
          <p>
            <strong>Developed by:</strong> Sriram Rajagopalan
          </p>
          <p>
            📧{" "}
            <a href="mailto:sriramrajaclg@gmail.com">sriramrajaclg@gmail.com</a>
            <br />
            🌐{" "}
            <a
              href="https://sriraj66.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sriraj66.github.io
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
