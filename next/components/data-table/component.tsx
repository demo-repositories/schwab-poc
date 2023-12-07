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
/**
 * Meant to show what a component talking to a 3rd party API but _informed_ by Sanity would look like.
 */
type SymbolInfo = {
  Symbol: string;
  Name: string;
  "Last Sale": string;
  "Net Change": number;
  "% Change": string;
  "Market Cap": number;
  Country: string;
  "IPO Year": number;
  Volume: number;
  Sector: string;
  Industry: string;
};
export default function RenderDataTable(props) {
  const { tickers, columnHeaders } = props;
  const [data, setData] = useState<SymbolInfo[] | null>();

  // If not in a useEffect ends up triggering a loop in draftMode
  useEffect(() => {
    // Could use process.env.NEXT_PUBLIC_VERCEL_URL
    const host =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://schwab-poc.sanity.build";
    const url = `${host}/api/stock-tickers`; // Custom endpoint for our API

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
  // Set header row text
  const headerRow = ["Name", ...columnHeaders];
  return (
    <div>
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
    </div>
  );
}
