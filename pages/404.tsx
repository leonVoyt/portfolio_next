import RootLayout from '@/app/MainLatout'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <RootLayout>
      <h1 className="error_text">Error 404</h1>
      <Link href={'/'}>Back to main</Link>
    </RootLayout>
  )
}

export default ErrorPage
