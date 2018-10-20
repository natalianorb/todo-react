import React from 'react';

function Day () {
  const header = <h2> Сб, 20</h2>
  const body = <div>
    <span>10:00</span>
    <span>Wake up</span>
  </div>
  
  return (
    <div className="day">
      {header}
      {body}
    </div>
  )
}

export default Day