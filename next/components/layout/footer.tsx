import ColorSchemeToggle from "./color-scheme-toggle";
import PreviewModeToggle from "./preview-mode-toggle";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl justify-end px-4 py-9">
      <PreviewModeToggle />
      <ColorSchemeToggle />
    </footer>
  );
}
