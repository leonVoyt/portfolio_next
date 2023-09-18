import RootLayout from '@/app/MainLatout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ErrorPage = () => {
  return (
    <RootLayout>
      <h1 className="error_text">Error 404</h1>
      <Link href={'/'}>Back to main</Link>
    </RootLayout>
  )
}

export default ErrorPage
