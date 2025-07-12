import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Yahya Lourarhi - AI Engineer & Data Scientist',
  description: 'Engineer specializing in Artificial Intelligence, Data Science, and Business Automation. Building intelligent solutions for real-world impact.',
  keywords: ['AI Engineer', 'Data Scientist', 'Machine Learning', 'Business Automation', 'Portfolio'],
  authors: [{ name: 'Yahya Lourarhi' }],
  creator: 'Yahya Lourarhi',
  openGraph: {
    title: 'Yahya Lourarhi - AI Engineer & Data Scientist',
    description: 'Engineer specializing in Artificial Intelligence, Data Science, and Business Automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 