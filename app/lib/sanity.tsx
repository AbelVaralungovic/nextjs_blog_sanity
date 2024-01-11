import { createClient } from "next-sanity";

const projectId = "z3d2cole";
const dataset = "production";
const apiVersion = "2024-01-11";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
