import logo from '../assets/images/logo/logo.svg'
import user from '../assets/images/icons/user.svg'
import search from '../assets/images/icons/search.svg'

import Button from '../components/Button';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center gap-3'>
      <img src={logo} alt='logo image' />
      <div className='flex justify-between items-center w-7/12'>
        <div className='flex justify-between items-center gap-10'>
          <a href=''>Home</a>
          <a href=''>Service</a>
          <a href=''>Agents</a>
          <a href=''>Contact</a>
        </div>
        <div className='flex justify-between items-center gap-8'>
          <img src={user} alt='user icon' className='w-4' />
          <img src={search} alt='search icon' className='w-4' />
          <Button className='w-28'>Sign up</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar