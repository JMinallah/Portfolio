import { existsSync } from "node:fs";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

/** The CV's URL, or null until the PDF has been added to public/. */
export function cvHref() {
  const file = path.join(process.cwd(), "public", siteConfig.cvFile);
  return existsSync(file) ? `/${siteConfig.cvFile}` : null;
}
