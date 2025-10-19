import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useState, useMemo, useCallback, Fragment } from "react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { CodeView } from "@/components/code-view";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { TreeView } from "./tree-view";
type FileCollection = { [path: string]: string };
function getLanguageFromExtension(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase();
  return extension || "text";
}
interface FileExplorerProps {
  files: FileCollection;
}
export const FileExplorer = ({ files }: FileExplorerProps) => {
  const [selectedFiles, setSelectedFiles] = useState<string | null>(() => {
    const fileKeys = Object.keys(files);
    return fileKeys.length > 0 ? fileKeys[0] : null;
  });
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
        <TreeView data={[]} value={selectedFiles} onSelect={() => {}} />
      </ResizablePanel>
      <ResizableHandle className="hover:bg-primary transition-colors" />
      <ResizablePanel defaultSize={70} minSize={50}>
        {selectedFiles && files[selectedFiles] ? (
          <div className="h-full flex flex-col w-full">
            <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
              <Hint text="Copy to clipboard" side="bottom">
                <Button
                  onClick={() => {}}
                  className="ml-auto"
                  size="icon"
                  variant="outline"
                  disabled={false}
                >
                  <CopyIcon />
                </Button>
              </Hint>
            </div>
            <div className="flex-1 relative ">
              <div className="absolute inset-0 overflow-auto">
                <CodeView
                  lang={getLanguageFromExtension(selectedFiles)}
                  code={files[selectedFiles]}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a file to view it&apos;s code
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
