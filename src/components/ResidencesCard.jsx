import Button from '../components/Button'

const ResidencesCard = ({ imgUrl , place,  placeIcon, roomIcon, rooms,  spaceIcon, space,  price }) => {
  return(
    <div className='flex flex-col w-[420px]'>
      <div>
        <img src={ imgUrl } alt='residence image' className='rounded-tl-xl rounded-tr-xl rounded-br-0 rounded-bl-0' />
      </div>
      <div className='bg-brown-400 p-6 rounded-tl-0 rounded-tr-0 rounded-br-xl rounded-bl-xl'>
        <div className='flex gap-2'>
          <img src={ placeIcon } alt='place icon' />
          <h3 className='font-bold text-2xl text-brown-900'>{ place }</h3>
        </div>
        <div className='flex justify-between items-center py-5'>
          <div className='flex gap-2'>
            <div className='bg-brown-500 rounded-md'>
              <img src={ roomIcon } alt='room icon' />
            </div>
            <p className='font-semibold text-lg'>{ rooms }</p>
          </div>
          <div className='flex gap-2'>
            <div className='bg-brown-500 rounded-md'>
              <img src={ spaceIcon } alt='space icon' />
            </div>
            <p className='font-semibold text-lg'>{ space }</p>
          </div>
        </div>
        <div className='flex justify-between items-center gap-10'>
          <Button className='w-[98px]'>Sign up</Button>
          <p className='font-bold text-2xl'>{ price }</p>
        </div>
      </div>
    </div>
  )
}

export default ResidencesCard