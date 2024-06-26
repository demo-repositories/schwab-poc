import tickerData from "../../../../sanity/data/stock-tickers.json";

/**
 * Fake API for data table to show how we can select attributes in Sanity that inform an API call on the front end.
 */

export async function POST(req: Request) {
  const { tickers } = await req.json();

  const filteredData = tickerData.filter((item) => {
    return tickers.indexOf(item.Symbol) !== -1;
  });
  const returnedData = [];
  for (let i = 0; i < tickers.length; i++) {
    const tickerItem = filteredData.filter(
      (item) => item.Symbol === tickers[i],
    )[0];
    returnedData[i] = tickerItem;
  }
  return Response.json({ data: returnedData });
}
