import { Roboto_Slab } from 'next/font/google';

import StyledComponentsRegistry from './registry';

export const metadata = {
  title: 'Password Generator',
  description: 'Password Generator',
}

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: "--font-roboto-slab",
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${robotoSlab.variable}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
