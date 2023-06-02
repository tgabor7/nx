import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.example.greeting.useQuery({
    name: 'World',
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