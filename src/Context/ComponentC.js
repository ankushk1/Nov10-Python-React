import React, { useContext } from 'react'
import { messageContext } from '../App';

const ComponentC = () => {
  const message = useContext(messageContext);

  return (
    <div> In ComponentC

        {message}
    </div>
  )
}

export default ComponentC