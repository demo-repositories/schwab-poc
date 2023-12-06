"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { vercelStegaCleanAll } from "@sanity/client/stega";
import { useEffect, useState } from "react";

export default function RenderDataTable(props) {
  const { tickers, columnHeaders } = props;
  console.log("tickers", tickers);
  const [data, setData] = useState();
  useEffect(() => {
    // Could use process.env.NEXT_PUBLIC_VERCEL_URL
    const host =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://schwab-poc.sanity.build";
    const url = `${host}/api/stock-tickers`;

    async function fetchData() {
      const fetchReq = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ tickers: vercelStegaCleanAll(tickers) }),
      });
      const res = await fetchReq.json();
      console.log("res.data", res.data);
      setData(res.data);
    }
    fetchData();
  }, [tickers, columnHeaders]);
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
