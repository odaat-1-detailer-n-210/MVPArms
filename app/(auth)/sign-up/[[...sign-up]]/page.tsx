import { SignUp } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth bg-gradient-to-tr bg-blend-color h-screen w-full">
      <SignUp />
    </div>
  )
}

export default Page