import SanityImage from "../../sanity-image";
import { PortableText } from "@portabletext/react";
import { Separator } from "../../ui/separator";

export default function StoryImage(props) {
  const {
    value: { caption },
  } = props;
  return (
    <div>
      <SanityImage {...props} />
      {caption && (
        <div className="mx-auto max-w-5xl text-xs italic">
          <PortableText
            value={caption}
            components={{
              block: {
                normal: ({ children }) => <p className="my-4">{children}</p>,
              },
            }}
          />
          <Separator />
        </div>
      )}
    </div>
  );
}
