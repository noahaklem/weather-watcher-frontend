function CityCard({key, city}) {
  return (
    <div key={ key } className="city-card">
      <div className="content">
        <button>Delete</button>
        <div className="city-name">
          <p>{ city }</p>
        </div>
      </div>
    </div>
  
  )
}

export default CityCard;