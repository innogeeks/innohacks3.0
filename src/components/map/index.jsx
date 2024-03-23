import React from 'react'
import "./style.css"
export default function Map() {
  return (
    <div id='map'> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8738998118392!2d77.49449147529377!3d28.753181675599052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1708783016861!5m2!1sen!2sin" width="400" height="400" className='kiet-map' style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
