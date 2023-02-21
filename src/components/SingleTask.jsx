import React from 'react'
import './singletask.css'
import deleteImage from '../images/icon-cross.svg'
import completedImage from '../images/icon-check.svg'

const SingleTask = (props) => {

  const styleDark = {
    backgroundColor : '#25273D',
    color: 'white'
  }

  const styleLight = {
    backgroundColor: 'white',
    color: '#494C6B'
  }

  const {id, handleCompleted, handleDelete, isDark} = props;
  const data = props.task
  return (
    <div className='list-container'>
      <ul className='item-list' style={isDark ? styleDark : styleLight}>
          
          <li className='list-item-display' style={{textDecoration: data.isCompleted ? 'line-through' : 'none'}}>
              <input type="checkbox" className='completed-button' onClick={()=> handleCompleted(id)} />
              {data.task}
              <img src={deleteImage} className='deleted-button' onClick={()=> handleDelete(id)}  />
          </li>
          
      </ul>
    </div>
  )
}

export default SingleTask