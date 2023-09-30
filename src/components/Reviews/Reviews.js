import React from 'react'
import './Reviews.css'

function Reviews() {
    const data=[
        {
            name:"Tina T",
            star:"* * * * *",
            des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            name:"Mike J",
            star:"* * * * *",
            des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            name:"Justing J",
            star:"* * * * *",
            des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }, 
    ]
  return (
    <div className='reviewscontainer'>
        <div>
            <div className='reviewTop'> 
                <h4>Our Reviews</h4>
            </div>
            <div className='reviewBottom'>
                {
                    data.map((item)=>{
                        return(
                            <div className='cardContainer'>
                                <h6>{item.name}</h6>
                                <p className='starText'>{item.star}</p>
                                <p>{item.des}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Reviews