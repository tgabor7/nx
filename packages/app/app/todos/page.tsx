'use client';
import React from 'react';

import useSWR from 'swr';

const Todo = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/todo', fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  console.log(error);
  console.log(data);
  

  return (
    <ul> 
      {JSON.stringify(data)}
    </ul>
   )
}
export default Todo;
