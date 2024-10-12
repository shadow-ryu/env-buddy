import { onAuthenticatedUser } from "@/actions/auth";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const user = await onAuthenticatedUser();

  if (user.status === 200) redirect("/callback/sign-in");

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex flex-col w- gap-6 full items-center py-24">
        <h2 className="text-4xl font-bold text-themeTextWhite">EnvKeeper.</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
