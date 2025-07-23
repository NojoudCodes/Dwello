import imgOne from '../assets/images/testimonials/img-01.jpg'
import imgTwo from '../assets/images/testimonials/img-02.jpg'
import imgThree from '../assets/images/testimonials/img-03.jpg'

import star from '../assets/images/icons/star.svg'

import personOne from '../assets/images/testimonials/person-01.jpg'
import personTwo from '../assets/images/testimonials/person-02.jpg'
import personThree from '../assets/images/testimonials/person-03.jpg'

import prev from '../assets/images/icons/prev.svg'
import next from '../assets/images/icons/next.svg'

import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
  return(
    <div className='flex flex-col items-center my-36 bg-brown-700 py-14 px-36'>
      <h2 className='font-extrabold text-5xl text-center leading-[140%]'>What People Say <br /> About Dwello</h2>
      <div className='flex gap-10'>
        <TestimonialsCard
          imgUrl= { imgOne }
          personImg= { personOne }
          personName='Sarah Nguyen'
          location='San Francisco'
          ratingIcon= { star }
          rating = '5.0'
          testimonial= 'Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.'
        />
        <TestimonialsCard
          imgUrl= { imgTwo }
          personImg= { personTwo }
          personName='Michael Rodriguez'
          location='San Diego'
          ratingIcon= { star }
          rating = '4.5'
          testimonial= 'I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!'
        />
        <TestimonialsCard
          imgUrl= { imgThree }
          personImg= { personThree }
          personName='Emily Johnson'
          location='Los Angeles'
          ratingIcon= { star }
          rating = '5.0'
          testimonial={`Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!`}
        />
      </div>
      <div className='flex items-center gap-10 mt-11'>
        <img src={ prev } alt='icon image' className='w-[58px]' />
        <img src={ next } alt='icon image' className='w-[58px]' />
      </div>
    </div>
  )
}

export default Testimonials