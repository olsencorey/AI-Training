const inputMarkdown = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let input = inputMarkdown.value;

  // h3, h2, h1 headings
  input = input.replace(/^[ \t]*### (.+)$/gm, "<h3>$1</h3>"); 
  input = input.replace(/^[ \t]*## (.+)$/gm, "<h2>$1</h2>"); 
  input = input.replace(/^[ \t]*# (.+)$/gm, "<h1>$1</h1>");

  // Blockquotes
  input = input.replace(/^[ \t]*> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Images ![alt](src)
  input = input.replace(/!\[([^\]]*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // Links [text](url)
  input = input.replace(/\[([^\]]+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Bold **text** or __text__
  input = input.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Italic *text* or _text_
  // Avoid replacing inside <strong> (so: negative lookahead)
  input = input.replace(/(\*|_)([^*_]+?)\1/g, "<em>$2</em>");

  return input;
}

inputMarkdown.addEventListener("input", () => {
  const html = convertMarkdown();
  output.textContent = html;
  preview.innerHTML = html;
});
