const Input = ({ type='', placeholder='', imgUrl = '' }) => {
  return(
    <div className='relative flex items-center'>
      <input
        type={type}
        placeholder={placeholder}
        className='bg-brown-500 w-64 h-12 px-4 rounded font-bold text-lg'
      />
      <img 
        src={imgUrl} 
        alt='icon'
        className='absolute right-3.5'
      />
    </div>
  );
}

export default Input