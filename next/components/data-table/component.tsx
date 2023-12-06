import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { vercelStegaCleanAll } from "@sanity/client/stega";

export default async function RenderDataTable(props) {
  const { tickers } = props;
  const url = `https://schwab-poc.sanity.build/api/stock-tickers`;
  const fetcheroo = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ tickers: vercelStegaCleanAll(tickers) }),
  });
  const { data } = await fetcheroo.json();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
