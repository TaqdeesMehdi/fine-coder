import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

interface TreeViewProps {
  data: TreeItem[];
  value?: string | null;
  onSelect?: (value: string) => void;
}
export const TreeView = ({ data, value, onSelect }: TreeViewProps) => {
  return <div></div>;
};
