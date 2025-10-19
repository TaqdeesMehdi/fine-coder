import { TreeItem } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function convertFilesToTreeItems(files: {
  [path: string]: string;
}): TreeItem[] {
  interface TreeNode {
    [key: string]: TreeNode | null;
  }
  const tree: TreeNode = {};
  const sortedPath = Object.keys(files).sort();
}
