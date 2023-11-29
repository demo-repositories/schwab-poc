import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Renders custom table block in portable text.
 *
 * Appears in 'CustomPortableText'.
 */

type TTableRow = {
  _key: string;
  cells: string[];
};
type TPortableTableProps = {
  value: {
    rows: TTableRow[];
  };
};

export default function PortableTable({ value }: TPortableTableProps) {
  const { rows } = value;
  const headerRow = rows[0];
  return (
    <Table className="text-md my-5">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {headerRow &&
            headerRow.cells.map((cell: string) => (
              <TableHead key={cell}>{cell}</TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-sm">
        {rows &&
          rows.map(
            ({ _key, cells }: { _key: string; cells: string[] }, r: number) => {
              if (!r) return;
              return (
                <TableRow key={_key}>
                  {cells &&
                    cells.map((cell: string, c: number) => {
                      return (
                        <TableCell key={`${r}-${c}-${cell}`}>{cell}</TableCell>
                      );
                    })}
                </TableRow>
              );
            },
          )}
      </TableBody>
    </Table>
  );
}
