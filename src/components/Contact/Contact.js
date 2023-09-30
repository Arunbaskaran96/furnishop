import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contactContainer'>
        <div className='contactWrapper'>
            <div className='contactTop'>
                <div className='contactTopLeft'>
                    <h5 className='contactText'>Start your buisness today for $0+ state fees.</h5>
                </div>
                <div className='contactTopRight'>
                    <button className='contactButton'>Get Started</button>
                    <button className='contactButton'>Contact Sales</button>
                </div>
            </div>
            <div className='contactBottom'>
                <div className='bottomOne'>
                    <h3>FurniShop</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='bottomSecond'>
                    <h6>The Company</h6>
                    <p>About us </p>
                    <p>Company Profile</p>
                    <p>License & certification</p>
                    <p>Work Completion Certificate</p>
                    <p>Our team </p>
                    <p>Contact usi</p>
                </div>
                <div className='bottomThird'>
                    <h6>More Information</h6>
                    <p>FAQ</p>
                    <p>Be our franchise</p>
                    <p>Career</p>
                    <p>Hatil Project Solution</p>
                    <p>Feedback</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='bottomFourth'>
                    <h6>Corporate Office</h6>
                    <p>8 Shewapara</p>
                    <p>rokeya sarani</p>
                    <p>mirupur,dhaka</p>
                    <p>Phone +695 841655 541481</p>
                    <p>Email : furnishop@gmial.com</p>
                </div>
            </div>
        </div>
        <div className='contactDiv'>
        </div>
    </div>
  )
}

export default Contact