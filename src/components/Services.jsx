import ServiceCard from './ServiceCard';

import map from '../assets/images/icons/Vector.svg'
import person from '../assets/images/icons/Vector-1.svg'
import edit from '../assets/images/icons/Vector-2.svg'
import hands from '../assets/images/icons/handshake.svg'

const Service = () => {
  return(
    <div className='my-32'>
      <div className='text-center'>
        <h2 className='font-bold text-5xl'>Why Choose Us</h2>
        <p className='font-bold text-lg mt-4 mb-16'>Elevating Your Home Buying Experience with Expertise, Integrity, <br /> and Unmatched Personalized Service</p>
      </div>
      <div className='flex items-center gap-10 p-8'>
        <ServiceCard 
          imgUrl={ map }
          header= 'Expert Guidance'
          paragraph= {`Benefit from our team's seasoned expertise for a smooth buying experience`}
          className='w-[53px] h-[52px]'
        />
        <ServiceCard 
          imgUrl={ person }
          header= 'Personalized Service'
          paragraph= {`Our services adapt to your unique needs, making your journey stress-free`}
          className='w-[52px] h-[52px'
        />
        <ServiceCard 
          imgUrl={ edit }
          header= 'Transparent Process'
          paragraph= {`Stay informed with our clear and honest approach to buying your home`}
          className='w-[52px] h-[52px'
        />
        <ServiceCard 
          imgUrl={ hands }
          header= 'Exceptional Support'
          paragraph= {`Providing peace of mind with our responsive and attentive customer service`}
          className='w-[52px] h-[52px rotate-50'
        />
      </div>
    </div>
);
}

export default Service