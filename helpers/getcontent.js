import fs from "fs";
import path from "path";
import { createClient } from "contentful";

const SPACE = "sc9ok02q0vxo";
const TOKEN = "wWLPUyf9LFpFrck9Ke7ZBcZj5g2OvicRPB7ET3VyROQ";

const client = createClient({
  space: SPACE,
  accessToken: TOKEN
});

const types = ["about", "whatIDo", "contact", "portfolio"];

export const getcontent = async () => {
  console.log("> Starting import...");
  for (const type of types) {
    console.log("> Getting content for", type);
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    });
    if (entries.total === 1) {
      const { fields } = entries.items[0];
      fs.writeFileSync(
        path.join(__dirname, "..", "static", `${type}.json`),
        JSON.stringify(fields)
      );
      console.log("> Content gotten and written for", type);
    } else {
      const fields = entries.items;
      console.log(entries.items);
      fs.writeFileSync(
        path.join(__dirname, "..", "static", `${type}.json`),
        JSON.stringify(fields)
      );
      console.log("> Content gotten and written for", type);
    }
  }
  return true;
};

if (process.argv[2] === "install") {
  getcontent();
}
