import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://charles-vandendriessche.fr"

const pages: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/cv", changeFrequency: "monthly", priority: 0.9 },
  { path: "/a-propos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/studio-ia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/intelligence-artificielle", changeFrequency: "monthly", priority: 0.8 },
  { path: "/data-driving", changeFrequency: "monthly", priority: 0.7 },
  { path: "/editions-saas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/marketing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/mission-croissance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
