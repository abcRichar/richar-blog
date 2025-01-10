import { AlignJustify } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
export default function HeaderMini() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <AlignJustify className="h-[1.2rem] w-[1.2rem] cursor-pointer dark:text-[#fff]" />
        </DrawerTrigger>
        <DrawerContent className="bg-[#fff] dark:bg-[#1f1f1f]">
          <div>
            <p className="text-primary">首页</p>
            <p>文章</p>
            <p>关于</p>
          </div>
          {/* <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader> */}
          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
