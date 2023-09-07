import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NewListItem from '../../components/NewListItem'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grocery List'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewListItem/>
        {children}
      </body>
    </html>
  )
}
