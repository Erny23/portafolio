import React from 'react';

const LoadingSkeleton = () => {
    return (
        <section id="loadingSkeleton" className="animate-pulse px-6 pt-6">
            <h1 className="rounded-md w-1/3 h-4 bg-zinc-300"></h1>
            <p className="mt-5 rounded-md w-5/6 h-4 bg-zinc-300"></p>
            <p className="mt-2.5 rounded-md w-5/6 h-4 bg-zinc-300"></p>
            <p className="mt-2.5 rounded-md w-5/6 h-4 bg-zinc-300"></p>
            <p className="mt-2.5 rounded-md w-5/6 h-4 bg-zinc-300"></p>
            <p className="mt-2.5 rounded-md w-1/2 h-4 bg-zinc-300"></p>
            <h1 className="my-6 rounded-md w-1/3 h-4 bg-zinc-300"></h1>
            <ul className="mt-5 w-full grid grid-cols-2 gap-3">
                <li>
                  <div className="flex gap-2">
                    <h2 className="rounded-md w-1/3 h-4 bg-zinc-300"></h2>
                    <p className="rounded-md w-1/2 h-4 bg-zinc-300"></p>
                  </div>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-1/2 h-4 bg-zinc-300"></p>
                </li>
                <li>
                  <div className="flex gap-2">
                    <h2 className="rounded-md w-1/3 h-4 bg-zinc-300"></h2>
                    <p className="rounded-md w-1/2 h-4 bg-zinc-300"></p>
                  </div>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-1/2 h-4 bg-zinc-300"></p>
                </li>
                <li className="mt-2.5">
                  <div className="flex gap-2">
                    <h2 className="rounded-md w-1/3 h-4 bg-zinc-300"></h2>
                    <p className="rounded-md w-1/2 h-4 bg-zinc-300"></p>
                  </div>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-1/2 h-4 bg-zinc-300"></p>
                </li>
                <li className="mt-2.5">
                  <div className="flex gap-2">
                    <h2 className="rounded-md w-1/3 h-4 bg-zinc-300"></h2>
                    <p className="rounded-md w-1/2 h-4 bg-zinc-300"></p>
                  </div>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-full h-4 bg-zinc-300"></p>
                  <p className="mt-2.5 rounded-md w-1/2 h-4 bg-zinc-300"></p>
                </li>
            </ul>
        </section>
    )
}

export default LoadingSkeleton
