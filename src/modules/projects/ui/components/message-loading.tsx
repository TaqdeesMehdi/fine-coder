import Image from "next/image";
import { useEffect, useState } from "react";

const UIMessageEffect = () => {
  const messages = [
    "Thinking...",
    "Loading...",
    "Generating...",
    "Analyzing your request...",
    "Building your website...",
    "Crafting components...",
    "Optimizing layout...",
    "Adding final touches...",
    "Almost ready...",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground animate-pulse">
        {messages[currentMessageIndex]}
      </span>
    </div>
  );
};
export const MessageLoading = () => {
  return (
    <div className="flex flex-col group px-2 pb-4">
      <div className="flex items-center mb-2 pl-2 gap-2">
        <Image
          src="/logo.svg"
          alt="viDe coBer"
          width={18}
          height={18}
          className="shrink-0"
        />
        <span className="text-sm font-medium">viDe coBer</span>
      </div>
      <div className="pl-8.5 flex flex-col gap-y-4">
        <UIMessageEffect />
      </div>
    </div>
  );
};
