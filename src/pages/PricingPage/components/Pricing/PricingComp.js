import React from 'react'
import './PricingCompStyles.css'
import {Link} from 'react-router-dom'

export default function PricingComp() {
  return (
    <>
    <div className='pricing'>
    <div className='card-container'>
        <div className='card'>
            <h3>- Classic Manicure -</h3>
            <span className='bar'></span>
            <p className='eth'>$35</p>
            <p>- 45 Minutes -</p>
            <p>- Relaxing Ambiance -</p>
            <p>- Highlighted Service -</p>
            <p>- Exclusive VIP Room -</p>
            <Link to='/contact' className='btn'>BOOK</Link>
        </div>
        <div className='card'>
            <h3>- Deluxe Pedicure -</h3>
            <span className='bar'></span>
            <p className='eth'>$50</p>
            <p>- 1 Hour -</p>
            <p>- Scenic View -</p>
            <p>- Top-Rated -</p>
            <p>- Private Spa Room -</p>
            <Link to='/contact' className='btn'>BOOK</Link>
        </div>
        <div className='card'>
            <h3>- Gel Polish Application -</h3>
            <span className='bar'></span>
            <p className='eth'>$20</p>
            <p>- 30 Minutes -</p>
            <p>- Modern Setting -</p>
            <p>- Popular Choice -</p>
            <p>- Personalized Booth -</p>
            <Link to='/contact' className='btn'>BOOK</Link>
        </div>
    </div>
</div>
<div className='pricing'>
    <div className='card-container'>
        <div className='card'>
            <h3>- Full Set Acrylics -</h3>
            <span className='bar'></span>
            <p className='eth'>$55</p>
            <p>- 1.5 Hours -</p>
            <p>- Chic Decor -</p>
            <p>- Featured Artistry -</p>
            <p>- Individual Suite -</p>
            <Link to='/contact' className='btn'>BOOK</Link>
        </div>
        <div className='card'>
            <h3>- Nail Repair -</h3>
            <span className='bar'></span>
            <p className='eth'>$10 per nail</p>
            <p>- 15 minutes per nail -</p>
            <p>- Professional Area -</p>
            <p>- Essential Care -</p>
            <p>- Confidential Setting -</p>
            <Link to='/contact' className='btn'>BOOK</Link>
        </div>
        <div className='card'>
            <h3>- Gentlemen's Manicure -</h3>
            <span className='bar'></span>
            <p className='eth'>$30</p>
            <p>- 45 Minutes -</p>
            <p>- Masculine Ambiance -</p>
            <p>- Men's Favorite -</p>
            <p>- Private Corner -</p>
            <Link to='/contact' className='btn'>BOOK</Link>
        </div>
    </div>
</div>
</>
  )
}
