import { draftMode } from "next/headers";
import DraftModeToggle from "./DraftModeToggle";

export default function PreviewModeWrapper({}) {
  const isEnabled = draftMode().isEnabled;

  return (
    <div className="mx-3 flex items-center space-x-2">
      <DraftModeToggle isEnabled={isEnabled} />
    </div>
  );
}
