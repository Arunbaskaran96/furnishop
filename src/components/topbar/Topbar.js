import React from 'react'
import "./Topbar.css"
function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
                <h3 className='companyName'>Furnishop</h3>
            </div>
            <div className='topbarRight'>
                <ul className='topbarLists'>
                    <li className='topbarList'>Home</li>
                    <li className='topbarList'>About</li>
                    <li className='topbarList'>Categories</li>
                    <li className='topbarList'>
                        <a className='anchorList' href=''>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='topbarMenuIcon'>
                <button>
                <i class="fa-solid fa-bars menuButton"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Topbar