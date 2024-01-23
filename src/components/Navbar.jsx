import React from 'react'

const Navbar = () => {
  return (
<div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Test Case</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li><a>Saved</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar