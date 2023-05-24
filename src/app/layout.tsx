import './globals.css'
import { Advent_Pro } from 'next/font/google'

const font = Advent_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'NCZ Stock',
  description: 'Stock App'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
