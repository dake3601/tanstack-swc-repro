import { createFileRoute } from '@tanstack/react-router'
import React from "react";
import { useState } from 'react';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}
