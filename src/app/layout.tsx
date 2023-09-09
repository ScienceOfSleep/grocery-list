import './globals.css'
import type { Metadata } from 'next'
import NewListItem from '../../components/NewListItem'

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
      <body className="body">
        {children}
        <NewListItem/>
      </body>
    </html>
  )
}
