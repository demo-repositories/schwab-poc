import { draftMode } from "next/headers";
import DraftModeToggle from "./draft-mode-toggle";

/**
 * Server component wrapper for DraftModeToggle to get draftMode header
 */

export default function PreviewModeWrapper({}) {
  const isEnabled = draftMode().isEnabled;

  return (
    <div className="mx-3 flex items-center space-x-2">
      <DraftModeToggle isEnabled={isEnabled} />
    </div>
  );
}
