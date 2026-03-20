export function getToolLabel(tool: string): string {
  const key = tool.toLowerCase().trim();

  if (key === "php") return "PHP";
  if (key === "codeigniter") return "CodeIgniter";
  if (key === "figma") return "Figma";
  if (key === "framer") return "Framer";
  if (key === "next.js" || key === "nextjs") return "Next.js";
  if (key === "node.js" || key === "nodejs") return "Node.js";
  if (key === "n8n") return "n8n";
  if (key === "zapier" || key === "zappier") return "Zapier";
  if (key === "make") return "Make";
  if (key === "laravel") return "Laravel";
  if (key === "excel" || key === "microsoft excel") return "Excel";
  if (key === "html") return "HTML";
  if (key === "css") return "CSS";
  if (key === "javascript" || key === "js") return "JavaScript";
  if (key === "chatgpt") return "ChatGPT";
  if (key === "gemini") return "Gemini";
  if (key === "salesforce" || key === "saleforce") return "Salesforce";
  if (key === "pipedrive") return "Pipedrive";
  if (key === "sql" || key === "mysql") return "MySQL";
  if (key === "react") return "React";
  if (key === "typescript") return "TypeScript";
  if (key === "python" || key === "phyton") return "Python";
  if (key === "apify") return "Apify";
  if (key === "firecrawl") return "Firecrawl";

  return tool;
}
