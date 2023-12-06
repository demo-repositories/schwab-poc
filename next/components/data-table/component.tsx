import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { vercelStegaCleanAll } from "@sanity/client/stega";

export default async function RenderDataTable(props) {
  const { tickers, columnHeaders } = props;
  const host = process.env.VERCEL_URL || "http://localhost:3000";
  const url = `${host}/api/stock-tickers`;
  const fetcheroo = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ tickers: vercelStegaCleanAll(tickers) }),
  });
  const { data } = await fetcheroo.json();
  const headerRow = ["Name", ...columnHeaders];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headerRow &&
            headerRow.map((item) => {
              return <TableHead key={item}>{item}</TableHead>;
            })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((item) => {
            return (
              <TableRow key={item.Symbol}>
                {headerRow.map((key) => {
                  const cleanKey = vercelStegaCleanAll(key);
                  const str =
                    cleanKey === "Name"
                      ? `${item.Name} (${item.Symbol})`
                      : item[cleanKey];
                  return (
                    <TableCell key={`${item.Symbol}-${cleanKey}`}>
                      {str}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
