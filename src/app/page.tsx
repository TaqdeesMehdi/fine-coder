"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const createMessage = useMutation(
    trpc.projects.create.mutationOptions({
      onSuccess: () => {
        toast.success("Background job initiated");
      },
    })
  );
  return (
    <div className="text-2xl font-extrabold text-blue-500">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={createMessage.isPending}
        onClick={() => createMessage.mutate({ value: value })}
      >
        create message
      </Button>
    </div>
  );
}
