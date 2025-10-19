import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = {
  width: 512,
  height: 512,
}
export const contentType = "image/png"

export default async function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      <div
        style={{
          width: "512px",
          height: "512px",
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://charles-van-den-driessche-fr-git-dev-vandendriesschecharles.vercel.app/charles-photo.png"
          alt="Charles Vandendriessche"
          width="512"
          height="512"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>,
    {
      ...size,
    },
  )
}
