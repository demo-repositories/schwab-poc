import ColorSchemeToggle from "./ColorSchemeToggle";
// import DraftModeToggle from "./DraftModeToggle";
import PreviewModeWrapper from "./PreviewModeWrapper";
export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl justify-end py-9">
      <PreviewModeWrapper />
      <ColorSchemeToggle />
    </footer>
  );
}
