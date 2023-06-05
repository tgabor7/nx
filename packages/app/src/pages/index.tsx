import { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
        <p>{JSON.stringify(hello.data)}</p>
      </Suspense>
    </div>
  );
}