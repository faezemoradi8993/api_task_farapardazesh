import React from 'react'
import requsts from "../../../api/station"

const index = () => {
requsts.get_matchdata_no_login()
  return (
    <header>header</header>
  )
}

export default index