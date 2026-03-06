import Menubar from "@/app/components/menus/Menubar";
import Navbar from "@/app/components/menus/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
      <div className="flex w-full">
        <div>
          <Menubar />
        </div>
        <div className="w-full flex flex-col">
          <div>
            <Navbar/>
          </div>
          <div>{children}</div>
        </div>
      </div>
  
  );
}
