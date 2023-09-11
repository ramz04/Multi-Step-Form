import Image from "next/image";
import bg_sidebar_mobile from "./assets/images/bg-sidebar-mobile.svg";
import bg_sidebar_desktop from "./assets/images/bg-sidebar-desktop.svg";
import { Button } from "@/components/ui/button";
import PersonalInfo from "@/components/forms/PersonalInfo";
import { FormItems, planOptions } from "../../types";

export default function Home() {
  const initialValues: FormItems = {
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    planLength: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
    isOnlineService: false,
  };
  return (
    <main className=" relative flex h-screen w-full flex-col bg-Magnolia">
      <div className="">
        <Image
          src={bg_sidebar_mobile}
          alt="Sidebar"
          className="h-full w-full md:hidden"
        />
        <div></div>
      </div>
      <div className="-mt-24 flex justify-center px-3 py-6">
        <PersonalInfo />
      </div>

      <div className="mt-auto flex items-end justify-end p-4">
        <Button type="submit" className="bg-Marineblue text-Magnolia">
          Confirm
        </Button>
      </div>
    </main>
  );
}
