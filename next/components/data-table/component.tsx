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
  const [data, setData] = useState();
  useEffect(() => {
    const host = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const url = `${host}/api/stock-tickers`;

    async function fetchData() {
      const fetchReq = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ tickers: vercelStegaCleanAll(tickers) }),
      });
      const res = await fetchReq.json();
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
