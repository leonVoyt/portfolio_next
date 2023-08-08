import React from 'react'
import Link from 'next/link'

function EmailComposer() {
  const recipientEmail = '6860571@stud.nau.edu.ua'
  const subject = 'Write this subject of email'
  const body = 'This is the body of the email.'

  const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`

  return <Link href={emailLink}>Send me massage on email right now!</Link>
}

export default EmailComposer
