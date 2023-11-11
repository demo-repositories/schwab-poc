import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PortableTable({ value }) {
  const { rows } = value;
  const headerRow = rows.shift();
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
          rows.map(({ _key, cells }, r: number) => {
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
          })}
      </TableBody>
    </Table>
  );
}
