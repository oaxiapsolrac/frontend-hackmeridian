import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend HackMeridian',
  description: 'Projeto Next.js com App Router, TypeScript e Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-900`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
