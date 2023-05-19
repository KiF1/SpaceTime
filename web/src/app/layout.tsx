import { CopyRight } from '@/components/CopyRight'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJanjuree } from 'next/font/google'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJanjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'Nlw SpaceTime',
  description: 'Uma Cápsula do tempo construída com Next.Js e Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = cookies().has('token');
  
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">
          <div className="flex bg-[url(../assets/bg-stars.svg)] bg-cover flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full blur-full bg-purple-700 opacity-40" />
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
            {isAuthenticated ? <Profile />  : <SignIn />}
            <Hero />
            <CopyRight />
          </div>
          
          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
