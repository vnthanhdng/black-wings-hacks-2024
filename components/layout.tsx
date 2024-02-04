import { Navbar, Footer } from '@/components'


// Any other styles specific to the layout should be imported here if they are not global.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className='body-padding min-h-screen'>
      {children}
      </div>
      <Footer />
      {/* You can include other layout components like a footer here */}
    </>
  );
}
