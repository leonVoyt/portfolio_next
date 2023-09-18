import React from 'react'
import RootLayout from '../src/app/MainLatout'
import EmailComposer from './EmailComposer'

const contacts = () => {
  return (
    <RootLayout>
      <div className="container">
        <div className="contacts">
          <div className="contacts-text _active__animation">
            <h1>Contacts</h1>
          </div>
          <div className="contacts-location _active__animation">
            <h2>Location</h2>
            <p>Kyiv Ukraine</p>
          </div>
          <div className="contacts-location _active__animation">
            <h2>Telegtam</h2>
            <p>+380 63 103 1201</p>
          </div>
          <div className="contacts-location _active__animation">
            <h2>Email</h2>
            <p>6860571@stud.nau.edu.ua</p>
          </div>
          <div className="contacts-location _active__animation">
            <EmailComposer />
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default contacts
