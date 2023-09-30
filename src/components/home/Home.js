import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='homeContainer'>
        <div className='homeWrapper'>
            <div className='homeImage'>
                <img className='homeImage' src='https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600' alt='FurnitureImage'/>
            </div>
            <div className='homeText'>
                <div>
                <h3 className='homeDes'>Creative Home Simply Your Furniture</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of</p>
                <button className='homeButton'>Shop now</button>
                </div>
            </div>
            <div className='homeAbout'>
                <div className='aboutLists'>
                <div className='aboutlist'>
                    <p>7</p>
                    <p>Year Experience</p>
                </div>
                <div className='aboutList'>
                    <p>2</p>
                    <p>Opened in the country</p>
                </div>
                <div className='aboutList'>
                    <p>15k+</p>
                    <p>Furniture Sold</p>
                </div>
                <div className='aboutList'>
                    <p>250k+</p>
                    <p>Variant Furniture</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home