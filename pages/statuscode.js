import { useEffect, useState } from 'react';

export async function getServerSideProps(context) {
  const { q } = context.query;
  const code = parseInt(q, 10);
  const valid = code >= 100 && code <= 599;
  const status = valid ? code : 200;

  context.res.statusCode = status;

  return {
    props: {
      code: valid ? code : null
    }
  };
}

const statusDescriptions = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",

  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",

  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",

  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Content",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",

  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required"
};

export default function StatusCodePage({ code }) {
  const [origin, setOrigin] = useState('');

  const message = code ? statusDescriptions[code] || "Unknown Status" : null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      padding: '2em',
      maxWidth: '720px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      {code && message ? (
        <>
          <h1 style={{ color: '#b30000' }}>HTTP {code} - {message}</h1>
          <p>This page was served with real HTTP status code <strong>{code}</strong>.</p>

          <h3>📜 JavaScript Example</h3>
          <pre style={{
            background: '#f8f8f8',
            padding: '1em',
            border: '1px solid #ccc',
            borderRadius: '5px',
            overflowX: 'auto'
          }}>{`fetch("/statuscode?q=${code}").then(res => {
  if (res.status === ${code}) {
    console.log("Handle ${message}");
  }
});`}</pre>

          <h3>📡 cURL Request</h3>
          <p>Use this command to simulate this status code from your terminal:</p>
          <pre style={{
            background: '#f4f4f4',
            padding: '1em',
            borderRadius: '5px',
            overflowX: 'auto'
          }}>
{`curl "${origin}/statuscode?q=${code}"`}
          </pre>

          <p>
            <a href="/statuscode" style={{ textDecoration: 'none', color: '#0070f3' }}>← Back to full list</a>
          </p>
        </>
      ) : (
        <>
          <h1>HTTP Status Code Viewer</h1>
          <p>Select a code below to see its description and simulate a real HTTP response:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.entries(statusDescriptions).map(([status, desc]) => (
              <li key={status} style={{
                margin: '0.4em 0',
                borderBottom: '1px solid #eee',
                paddingBottom: '0.4em'
              }}>
                <a
                  href={`/statuscode?q=${status}`}
                  style={{ textDecoration: 'none', color: '#0070f3' }}
                >
                  <strong>HTTP {status}</strong> - {desc}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
