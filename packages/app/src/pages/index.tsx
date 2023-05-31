import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.greeting.useQuery({
    name: "world",
  });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{JSON.stringify(hello.data)}</p>
    </div>
  );
}