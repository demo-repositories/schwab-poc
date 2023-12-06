import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TaxonomyInfo({ items }) {
  return (
    <div className="mx-auto my-12 max-w-5xl">
      <h4 className="text-2xl font-bold tracking-tight">Taxonomy Info</h4>
      <Accordion type="single" collapsible>
        {items ? (
          items.map(({ _key, taxonomyAttribute, terms }) => {
            return (
              <AccordionItem key={_key} value={_key}>
                <AccordionTrigger>{taxonomyAttribute.name}</AccordionTrigger>
                <AccordionContent>
                  {terms && (
                    <ul className="list-inside list-disc">
                      {terms.map(({ name, _id }) => {
                        return <li key={_id}>{name}</li>;
                      })}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })
        ) : (
          <p>None</p>
        )}
      </Accordion>
    </div>
  );
}
