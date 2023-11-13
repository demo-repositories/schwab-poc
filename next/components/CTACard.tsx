import Button, { TButtonProps } from "./Button";

type TIconCardProps = {
  title?: string;
  body: string;
  ctaText: string;
  to: {
    _type: string;
    slug: {
      current: string;
    };
  };
};
export default function CTACard({ title, body, ctaText, to }: TIconCardProps) {
  console.log("to", to);
  return (
    <div className="card mb-9 bg-accent p-5 lg:mb-0 lg:basis-[34%]">
      {title && <strong className="my-2 block">{title}</strong>}
      {body && <p className="mb-3">{body}</p>}
      {to && <Button to={to} text={ctaText} />}
    </div>
  );
}
