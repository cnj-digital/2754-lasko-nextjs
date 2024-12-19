export function isExternalLink(url: string) {
  return url.startsWith("http");
}

export function generateAnchorLink(text: string) {
  return (
    text
      // Convert to lowercase
      .toLowerCase()
      // Replace diacritics/accents with normal letters
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      // Replace spaces with hyphens
      .replace(/\s+/g, "-")
      // Remove all non-alphanumeric characters except hyphens
      .replace(/[^a-z0-9-]/g, "")
      // Remove duplicate hyphens
      .replace(/-+/g, "-")
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, "")
  );
}
