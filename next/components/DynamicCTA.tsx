import Button, { TButtonProps } from "./Button";

type TDynamicCTAProps = {
  value: {
    heading: string;
    button: TButtonProps;
  };
};
export default function DynamicCTA({ value }: TDynamicCTAProps) {
  const { heading, button } = value;

  return (
    <section className="flex items-center justify-center py-7">
      <div className="dynamic-cta-container fles min-w-[66%] items-center justify-center bg-accent p-12">
        <h3 className="text-center text-2xl font-bold tracking-tight">
          {heading}
        </h3>
        <div className="mt-3 flex items-center justify-center">
          <Button {...button} />
        </div>
      </div>
    </section>
  );
}
