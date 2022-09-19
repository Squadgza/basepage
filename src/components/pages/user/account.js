import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flexjc-c'>
      <div className='bord flexcol'>
        <div id='sec'>
          <h2>Log In</h2>
        </div>
        <form action="" className='flexcol' method="post">
          <label className='f20' htmlFor='username'><b>Username:</b></label>
          <input id='username' className='loginp username' type='text' name='username' placeholder='username' />
          <label className='f20' htmlFor='password'><b>Password:</b></label>
          <input id='password' className='loginp password' type='password' name='password' placeholder='password' />
          <input className='logstyle' id='lastloginp' type='submit' value='Log In' />
          {/* TODO create form/page for restore passw */}
          <p className='f20'>Forgot password? <Link to="/restore_password">Send request</Link></p>
        </form>
      </div>
    </div>
  )
}

const AccountInfo = () => {
  return (
    // TODO create User can interact with his data.
    <div className="profile-pagewrapper">
      <p> UserImage</p>
      <p className="profile-page__name">Username</p>
      <p className="profile-page__name">userMail</p>
      <p className="profile-page__name">UserPosts</p>
      <p className="profile-page__name">UserWarnings</p>
      <p className="profile-page__name">User sign-up's to events</p>
      <p className="profile-page__name">User Since</p>
      <div className="profile-page__visits">Users views <p className="profile-page__visits-count">94</p></div>
    </div>
  )
}

export const Account = () => {
  return (
    // TODO add condition so if User is loged in accountinfo available
    // TODO if comes from Home show Login and Login has Link to Signup
    <>
      <SignUp />

      {/* if logged in you can see */}
      <AccountInfo />

    </>
  )
}
// export default SignUp