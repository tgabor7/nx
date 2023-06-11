import { trpc } from '@app/utils/trpc';
import { Suspense } from 'react';

const Page = () => {

  const hello = trpc.example.getTodos.useQuery();

  return (
    <div>
      <h1>DB Test</h1>
      
      <Suspense fallback={<div>Loading...</div>}>
        {hello.data?.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </Suspense>
    </div>
    
  );  

};

export default Page;
