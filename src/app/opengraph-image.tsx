import { ImageResponse } from "next/og";

export const alt = "Sai Tej Deep Challagali — Full Stack Developer | AI & Web Application Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,212,191,0.22), transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-120px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 68%)",
          }}
        />
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2dd4bf",
            marginBottom: 24,
          }}
        >
          Full Stack • AI • Engineering
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.08,
            fontWeight: 700,
            maxWidth: 900,
          }}
        >
          Sai Tej Deep Challagali
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 24,
            color: "#a1a1aa",
          }}
        >
          Full Stack Developer | AI & Web Application Engineer
        </div>
        <div
          style={{
            fontSize: 21,
            marginTop: 42,
            color: "#71717a",
          }}
        >
          Building intelligent, scalable software for the real world.
        </div>
      </div>
    ),
    { ...size },
  );
}