import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ["400","500","700"],
  display: "swap",
  subsets: ["latin"],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
