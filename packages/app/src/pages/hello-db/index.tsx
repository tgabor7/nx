import { trpc } from '@app/utils/trpc';

const Page = () => {

  const hello = trpc.example.getTodos.useQuery();

  return (
    <div>
      <h1>DB Test</h1>
      
      <p>{JSON.stringify(hello.data)}</p>
    </div>
    
  );  

};

export default Page;
