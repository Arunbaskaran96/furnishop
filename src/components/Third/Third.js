import React from 'react'
import "./Third.css"

function Third() {
  return (
    <div className='thirdContainer'>
        <div className='thirdWrapper'>
            <div className='thirdLeft'>
                <img className='thirdImage' src='https://www.at-home.co.in/cdn/shop/products/Velma3strLSwithcushion.jpg?v=1664268691' alt='thirdImage'/>
            </div>
            <div className='thirdRight'>
                <h4>We Create Your Home More Astetic</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className='thirdRightBottomContainer'>
                <div className='thirdRightBottom'>
                    <div>
                        <img   className="tickImage" src='https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg' alt='img'/>
                    </div>
                    <div>
                        <h4>Valuation Services</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                <div className='thirdRightBottom'>
                    <div>
                        <img   className="tickImage" src='https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg' alt='img'/>
                    </div>
                    <div>
                        <h4>Developement of Furniture Models</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Third