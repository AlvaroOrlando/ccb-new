import Header from '@/components/Header'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const Open = Open_Sans({ subsets: ['latin'], weight:"400" })

import StyledComponentsRegistry from '../lib/registry'
import { GlobalContextProvider } from './Context/GlobalContextProvider'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={Open.className}>
          <GlobalContextProvider>
            <StyledComponentsRegistry>
              <Header />
              {children}
            </StyledComponentsRegistry>
          </GlobalContextProvider>
      </body>
    </html>
  )
}