import { CopyRight } from "@/components/CopyRight";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";
import { EmptyMemories } from "@/components/EmptyMemories";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex bg-[url(../assets/bg-stars.svg)] bg-cover flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full blur-full bg-purple-700 opacity-40" />
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
        <SignIn />
        <Hero />
        <CopyRight />
      </div>
      
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  )
}
