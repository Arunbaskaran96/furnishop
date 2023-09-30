import React from 'react'
import "./Fourth.css"

function Fourth() {
  return (
    <div className='fourthContainer'>
      <div className='fouthWrapper'>
        <div className='fourthLeft'>
          <h4>Design your dream home with the perfect furniture</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button className='fourthButton'>Explore all products</button>
        </div>
        <div className='fourthRight'>
          <img className='fouthImage' src='https://assets-news.housing.com/news/wp-content/uploads/2021/09/02204443/Hanging-lights-ideas-to-illuminate-your-home-FB-1200x700-compressed.jpg' alt='fourthImage'/>
        </div>
      </div>
    </div>
  )
}

export default Fourth