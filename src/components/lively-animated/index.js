/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import './styles.css'

const LivelyAnimated = () => {
  document.querySelector('body').addEventListener('mousemove', eyeBall)

  function eyeBall(e) {
    const eye = document.querySelectorAll('.eye')

    eye.forEach(eye => {
      const x = eye.getBoundingClientRect().left + eye.clientWidth / 2
      const y = eye.getBoundingClientRect().top + eye.clientHeight / 2
      const radian = Math.atan2(e.pageX - x, e.pageY - y)
      const rot = radian * (180 / Math.PI) * -1 + 270

      eye.style.transform = `rotate(${rot}deg)`
    })
  }
  return (
    <body className="body">
      <div className="face">
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>

      <h3 className="attendence">Nenhum atendimento</h3>
    </body>
  )
}

export default LivelyAnimated
