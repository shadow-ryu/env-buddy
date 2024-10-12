import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";

import Link from "next/link";

// type Props = {};

const CallToAction = () => {
  return (
    <div className="flex flex-col items-start md:items-center gap-8">
      <div className="flex flex-col items-center justify-center">
        <GradientText
          className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
          element="H1"
        >
          Making .Env Share <br className="md:hidden" /> easier
        </GradientText>
        <p className="text-sm md:text-center text-left text-muted-foreground">
          EnvKeeper is a user-friendly platform for developers and teams to
          manage your environment variables efficiently across teams.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        {/* <Button
          variant="outline"
          className="rounded-xl bg-transparent text-base"
        >
          Watch Demo
        </Button> */}
        <Link href="/sign-in">
          <Button className="rounded-xl text-base flex gap-2 w-full">
            <BadgePlus /> Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
