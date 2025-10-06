import { Geist } from "next/font/google"
import "./globals.css"
import { MobileNav } from "@/components/layout/mobile-nav"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata = {
  title: "FitQuest - Gamified Fitness Challenge",
  description: "Ubah Olahraga Jadi Seru dengan FitQuest",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={geist.variable}>
      <body className="bg-background text-foreground min-h-screen pb-16">
        <main className="container max-w-md mx-auto px-4">
          {children}
        </main>
        <MobileNav />
      </body>
    </html>
  )
}
