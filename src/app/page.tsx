"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Hello nigga" }));
  return (
    <div className="text-4xl font-extrabold text-blue-500">
      Fine coder{JSON.stringify(data)}
    </div>
  );
}
