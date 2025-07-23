import Navbar from './Navbar';

import heroImg from '../../public/hero-image.svg'
import Button from './Button';
import Input from './Input';

import location from '../assets/images/icons/location.svg'
import home from '../assets/images/icons/home.svg'
import price from '../assets/images/icons/price.svg'

const Hero = () => {
  return(
    <>
      <header className='relative bg-brown-700 h-screen p-10'>
        <Navbar />
        <div className='flex justify-between items-center  h-full'>
          <div className='max-w-4/12'>
            <h1 className='text-7xl font-extrabold'>Find Your <br /> Dream Home</h1>
            <p className='mt-8 mb-12 text-lg'>Explore our curated selection of exquisite <br /> properties meticulously tailored to your <br /> unique dream home vision</p>
            <Button className='w-40 text-lg'>Sign up</Button>
          </div>
          <div className='max-w-8/12'> 
            <img src={heroImg} alt='hero image' className='' />
          </div>
        </div>
      </header>
      <div className='absolute left-40 -bottom-20 bg-brown-600 flex items-center gap-8 w-5xl py-12 px-6 rounded-2xl'>
        <Input type='text' placeholder='Location' imgUrl={ location } />
        <Input type='text' placeholder='Type' imgUrl={ home } />
        <Input type='text' placeholder='Price Range' imgUrl={ price } />
        <Button className='w-56 text-lg'>Sign up</Button>
      </div>
    </>
  );
}


export default Hero