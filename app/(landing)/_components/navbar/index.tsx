import GlassSheet from "@/components/global/glass-sheet";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Menu from "./menu";
import { LogOut, MenuIcon } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

const LandingPageNavbar = async () => {
  const LoggedInUser = await currentUser();
  console.log(LoggedInUser);
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <p className="font-bold text-2xl">EnvKeeper.</p>
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href={LoggedInUser?.id ? "/dashboard" : "sign-in"}>
          {LoggedInUser?.id ? (
            <Button
              variant="outline"
              className="bg-indigo-600 rounded-2xl flex gap-2 "
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant="outline"
              className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
            >
              <LogOut />
              Login
            </Button>
          )}
        </Link>
        <SignOutButton />
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
