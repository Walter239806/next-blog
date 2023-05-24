import Link from 'next/link'
import '../styles/global.css'
import Header from './components/nav'

export const metadata = {
  title: 'Next-Blog',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
