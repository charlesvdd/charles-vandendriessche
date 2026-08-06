import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Charles Van den Driessche — Architecte IA"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const photoBuffer = await readFile(join(process.cwd(), "public/charles-photo.png"))
  const photoDataUrl = `data:image/png;base64,${photoBuffer.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <img
          src={photoDataUrl}
          width={180}
          height={180}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "36px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        />
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            margin: "0 0 16px 0",
            color: "#262626",
          }}
        >
          Charles Van den Driessche
        </h1>
        <p
          style={{
            fontSize: "30px",
            color: "#32afb1",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Architecte IA — LLM, systèmes multi-agents & RAG
        </p>
      </div>
    ),
    {
      ...size,
    },
  )
}
