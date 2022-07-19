function Heroes(props) {
  return (
    <div className="heroes-container">
      <div className="hero-strength-container">
        <h6 className="hero-strength">4</h6>
      </div>
      <h6>{props.name}</h6>
    </div>
  )
}

export default Heroes;