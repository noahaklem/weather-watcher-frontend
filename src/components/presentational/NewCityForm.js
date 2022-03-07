import Button from "./Button";

function NewCityForm(props) {
  if (!props.showForm) {
    return null;
  }

  return (
    <div className="add-new-city-form-container">
      <button onClick={ props.onClick } >
        Close
      </button>
      <form className="add-new-city-form" onSubmit={ props.onSubmit } >
        <label htmlFor='city_name'>Enter a City Name:</label>
        <input 
          type="text"
          name="city"
          onChange={ props.onChange }
          placeholder="Enter A City Name ex: Denver,CO"
        />
        <input type="submit" value="Add Forecast" />
      </form>
    </div>
    
  )
}

export default NewCityForm;