function CityCard({city}) {
  return (
    <div key={ city } className="city-card">
      <div className="content">
        <button className="delete">X</button>
        <div className="city-name">
          <p>{ city }</p>
        </div>
      </div>
    </div>
  
  )
}

export default CityCard;