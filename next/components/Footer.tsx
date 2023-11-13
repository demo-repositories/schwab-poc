import ColorSchemeToggle from "./ColorSchemeToggle";
import PreviewModeWrapper from "./PreviewModeWrapper";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl justify-end px-4 py-9">
      <PreviewModeWrapper />
      <ColorSchemeToggle />
    </footer>
  );
}
