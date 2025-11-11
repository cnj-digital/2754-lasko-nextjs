import fs from "fs/promises";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const SITEMAP_URL = "https://cms.lasko.eu/sitemap.xml";
const OUTPUT_PATH = path.join(process.cwd(), "public", "sitemap.xml");

function fetchSitemap() {
  return new Promise((resolve, reject) => {
    https
      .get(SITEMAP_URL, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch sitemap: ${res.statusCode}`));
          return;
        }

        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(new Error(`Failed to fetch sitemap: ${err.message}`));
      });
  });
}

async function writeSitemap(content) {
  try {
    // Ensure the public directory exists
    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });

    // Write the sitemap file
    await fs.writeFile(OUTPUT_PATH, content, "utf-8");
   // console.log("Successfully wrote sitemap to", OUTPUT_PATH);
  } catch (error) {
    throw new Error(`Failed to write sitemap: ${error.message}`);
  }
}

async function main() {
  try {
    //console.log("Fetching sitemap from", SITEMAP_URL);
    const sitemap = await fetchSitemap();
    await writeSitemap(sitemap);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

// Execute if this is the main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { fetchSitemap, writeSitemap };
