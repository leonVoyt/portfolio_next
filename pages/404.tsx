import RootLayout from '@/app/MainLatout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ErrorPage = () => {
  // Redirect or render the appropriate content as per your requirement
  // Eg. redirect to the home page

  return (
    <RootLayout>
      <h1 className="error_text">Error 404</h1>
      <Link href={'/'}>Back to main</Link>
    </RootLayout>
  )
}

export default ErrorPage
