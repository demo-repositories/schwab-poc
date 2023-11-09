export const query = `count(*[_type == "story"])`;

export default function Stories({ data }: { data: number }) {
  return <div>There are {data} documents</div>;
}
