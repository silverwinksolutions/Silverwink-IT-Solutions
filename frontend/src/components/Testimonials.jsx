import React from 'react'
import Testimonialsimg from '../assets/testimonials.jpg'
import MannualSlider from './MannualSlider.jsx'
import photo1 from '../assets/photo-1.webp'
import photo2 from '../assets/photo-2.webp'
import photo3 from '../assets/photo-3.webp'
import photo4 from '../assets/photo-4.webp'

const user = [
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo1,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo2,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo3,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo4,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo1,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo2,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo3,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
  {
    title: "The Silverwink team works really hard to ensure high level of quality",
    review: "There are thousands of IT service companies in the U.S But there's noting like silverwink. Their popularity and reputation are just evident",
    image: photo4,
    name: "Maggie Strickland",
    positon: "WEB DEVELOPER"
  },
]
const Testimonials = () => {
  return (
    <div>
      <div className=' text-black min-h-[65vh] mt-2 sm:mt-5 md:mt-10'
        style={{ backgroundImage: `url(${Testimonialsimg})` }}>
        <h1 className='text-center text-gray-500'>TESTIMONIALS</h1>
        <h1 className='text-center mt-5 font-semibold text-5xl text-[#0b3130]'>Why do people praise about Silverwink?</h1>
        <div>
          <MannualSlider testimonials={user} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
