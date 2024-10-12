import LandingPageNavbar from "./_components/navbar"

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  relative w-full">
      <LandingPageNavbar />
      {children}
    </div>
  )
}

export default LandingPageLayout
