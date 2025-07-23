import Button from './Button'

import verified from '../assets/images/icons/verified.svg'
import email from '../assets/images/icons/email.svg'

const CallToAction = () => {
  return(
    <div className='mb-36'>
      <h2 className='text-center font-extrabold text-6xl'>Do You Have Any Questions? <br /> Get Help From Us</h2>
      <div className='w-[680px] m-auto'>
        <div className='flex justify-between items-center mt-8 mb-16'>
          <div className='flex justify-between items-center gap-2'>
            <img src={ verified } alt='icon image' />
            <p className='font-bold text-lg'>Chat live with our support team</p>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <img src={ verified } alt='icon image' />
            <p className='font-bold text-lg'>Browse our FAQ</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='relative flex items-center gap-5 bg-brown-400 w-[505px] h-[58px]'>
            <input type='email' placeholder='Enter your email address...' className='ps-14 rounded-2xl' />
            <img src={ email } alt='icon image' className='absolute left-3' />
          </div>
          <Button className='w-[156px] h-[58px]'>Sign up</Button>
        </div>
      </div>

    </div>
  )
}

export default CallToAction