import logo from '../assets/images/logo/footer-logo.png'
import instagram from '../assets/images/icons/instagram.svg'
import facebook from '../assets/images/icons/facebook.svg'
import twitterx from '../assets/images/icons/twitterx.svg'


const Footer = () => {
  return(
    <footer className='bg-brown-400 flex gap-32 px-8 py-20'>
      <div className='p-0'>
        <img src={ logo } alt='logo image' className='w-[93px]' />
        <p className='font-bold text-lg text-brown-800 leading-[130%] mt-8'>Bringing you closer to <br /> your dream home, one <br /> click at a time.</p>
      </div>
      <div className='flex justify-between w-[800px]'>
        <div className='flex flex-col gap-8'>
          <div className='font-bold text-2xl'>About</div>
          <a className='font-bold text-lg text-brown-800'>Our Story</a>
          <a className='font-bold text-lg text-brown-800'>Careers</a>
          <a className='font-bold text-lg text-brown-800'>Our Team</a>
          <a className='font-bold text-lg text-brown-800'>Resources</a>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='font-bold text-2xl'>Support</div>
          <a className='font-bold text-lg text-brown-800'>FAQ</a>
          <a className='font-bold text-lg text-brown-800'>Contact Us</a>
          <a className='font-bold text-lg text-brown-800'>Help Center</a>
          <a className='font-bold text-lg text-brown-800'>Terms of Service</a>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='font-bold text-2xl'>Find Us</div>
          <a className='font-bold text-lg text-brown-800'>Events</a>
          <a className='font-bold text-lg text-brown-800'>Locations</a>
          <a className='font-bold text-lg text-brown-800'>Newsletter</a>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='font-bold text-2xl'>Our Social</div>
          <div className='flex items-center gap-2'>
            <img src={ instagram } alt='icon image' />
            <a className='font-bold text-lg text-brown-800'>Instagram</a>
          </div>
          <div className='flex items-center gap-2'>
            <img src={ facebook } alt='icon image' />
            <a className='font-bold text-lg text-brown-800'>Facebook</a>
          </div>
          <div className='flex items-center gap-2'>
            <img src={ twitterx } alt='icon image' />
            <a className='font-bold text-lg text-brown-800'>Twitter (x)</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer