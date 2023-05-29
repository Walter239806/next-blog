import { ProvideAuth } from '@/context/session'
import '../styles/global.css'
import Footer from './components/footer'
import Header from './components/nav'

export const metadata = {
  title: 'Next-Blog',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProvideAuth>
        <head>
          <title>{metadata.title}</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            {children}
          </div>
          <Footer />
        </body>
      </ProvideAuth>
    </html>
  )
}
