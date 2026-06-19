export function md(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong class='text-brand-dark font-bold'>$1</strong>");
}
