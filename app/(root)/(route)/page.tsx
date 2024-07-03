import React from 'react'
import { UserButton } from '@clerk/nextjs'

const SetupPage = () => {
  return (
    <div>
      this is dashboard<UserButton afterSwitchSessionUrl="/" />

    </div>
  )
}

export default SetupPage
