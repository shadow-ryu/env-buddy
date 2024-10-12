import LandingPageNavbar from "./_components/navbar"

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  relative w-full p-[2rem] md:p-0">
      <LandingPageNavbar />
      {children}
    </div>
  )
}

export default LandingPageLayout
