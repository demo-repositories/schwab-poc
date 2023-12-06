import tickerData from "../../../../sanity/data/stock-tickers.json";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tickers = searchParams.get("tickers")?.split(",");
  const filteredData = tickerData.filter((item) => {
    return tickers.includes(item.Symbol);
  });
  return Response.json({ data: filteredData });
}
