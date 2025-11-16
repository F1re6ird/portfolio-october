import './globals.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-brand border-x-[1px] border-brand-dark border-brand-dark/20 md:mx-24 lg:mx-52'>{children}</body>
    </html>
  )
}