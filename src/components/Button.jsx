
const Button = ({ children, type='button', className= '' }) => {
  return(
    <button
      type={type}
      className={`h-12 bg-brown-900 text-white rounded font-semibold ${className}`}
    >
      {children}
    </button>
  );  
}

export default Button