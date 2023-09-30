import React from 'react'
import "./Categories.css"

function Categories() {
  return (
    <div className='categoriesContainer'>
        <div className='categoriesWraper'>
            <div>
                <h3 className='categoriesHeading'>Popular Categories</h3>
            </div>
            <div className='categoriesLists'>
                <div className='categoriesList'>
                    <img className='furnImage' src='https://previews.123rf.com/images/kovacevic/kovacevic1010/kovacevic101000004/7945083-wooden-chair-on-white-background.jpg' alt='furnImage'/>
                    <h5>Chair</h5>
                </div>
                <div className='categoriesList'>
                    <img className='furnImage' src='https://img.freepik.com/premium-photo/office-cabinet-shelf-isolated-white-background_85869-1201.jpg?w=2000' alt='furnImage'/>
                    <h5>Cabinent</h5>
                </div>
                <div className='categoriesList'>
                    <img className='furnImage' src='https://img.freepik.com/premium-vector/yellow-cartoon-electric-lamp-white-background_87744-170.jpg?w=2000' alt='furnImage'/>
                    <h5 className='furniText'>Lamp</h5>
                </div>
                <div className='categoriesList'>
                    <img className='furnImage' src='https://cdn.vectorstock.com/i/1000x1000/98/07/round-wooden-table-on-white-background-vector-14369807.webp' alt='furnImage'/>
                    <h5>Table</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories