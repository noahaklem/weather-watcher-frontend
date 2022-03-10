function NewCityForm({showForm, onChange, onClick, onSubmit, city}) {
  if (!showForm.showForm) {
    return null;
  }

  return (
    <div className="add-new-city-form-container">
      <button className="delete" onClick={ onClick }>
        X
      </button>
      <form className="add-new-city-form" onSubmit={ onSubmit } >
        <label htmlFor='city_name'>Enter a City Name:</label>
        <input 
          type="text"
          name="city"
          value={ city }
          onChange={ onChange }
          placeholder="Enter A City Name ex: Denver,CO"
        />
        <input type="submit" value="Add Forecast" />
      </form>
    </div>
    
  )
}

export default NewCityForm;