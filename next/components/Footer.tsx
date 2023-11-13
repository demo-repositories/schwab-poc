import ColorSchemeToggle from "./color-scheme-toggle";
import PreviewModeWrapper from "./preview-mode-wrapper";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl justify-end px-4 py-9">
      <PreviewModeWrapper />
      <ColorSchemeToggle />
    </footer>
  );
}
