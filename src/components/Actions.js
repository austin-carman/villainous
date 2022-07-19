function Actions(props) {
  return (
    <div className="actions-container">
      <h2>{props.name.name}</h2>
      <div className="action">{props.name.action1}</div>
      <div className="action">{props.name.action2}</div>
      <div className="action">{props.name.action3}</div>
      <div className="action">{props.name.action4}</div>
    </div>
  )
}

export default Actions;