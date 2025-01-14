import { AlignJustify } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ModeToggle } from "@/components/mode-toggle";

export default function HeaderMini() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <AlignJustify className="h-[1.5rem] w-[1.5rem] cursor-pointer dark:text-[#fff]" />
        </DrawerTrigger>
        <DrawerContent className="bg-[#fff] dark:bg-[#1f1f1f] p-2">
          <div>
            <p className="menu-txt py-2">首页</p>
            <p className="menu-txt py-2">文章</p>
            <p className="menu-txt py-2">关于</p>
            <ModeToggle />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
