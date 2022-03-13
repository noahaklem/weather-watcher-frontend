const Button = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="add-a-city" onClick={ onClick }>
        Add A City
      </button>
    </div>
    
  ) 
}

export default Button;