import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Charles Van den Driessche - Expert IA & Automatisation"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  // We use a simple gradient background with text since we can't easily load the local image in the edge runtime
  // without a public URL. However, we can style it to look professional.
  
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {/* Simulated Avatar Circle */}
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            }}
          >
            CV
          </div>
        </div>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            margin: "0 0 20px 0",
            background: "linear-gradient(to right, #60a5fa, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Charles Van den Driessche
        </h1>
        <p
          style={{
            fontSize: "30px",
            color: "#cbd5e1",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Expert en intelligence artificielle, automatisation et marketing data-driven
        </p>
      </div>
    ),
    {
      ...size,
    },
  )
}
