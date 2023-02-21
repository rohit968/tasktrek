import React, {useEffect, useState} from 'react'
import './newtask.css'
import moonLogo from '../images/icon-moon.svg'
import sunLogo from '../images/icon-sun.svg'
import SingleTask from './SingleTask'

/*-- Getting data from local storage --*/
const getLocalItems = () => {
  let list = localStorage.getItem('tasks');

  if(list) {
    return JSON.parse(localStorage.getItem('tasks'));
  } else {
    return [];
  }
}

/*---- Main function of the component ----*/

const NewTask = ({isDark, handleClickDarkMode}) => {
  const [inputItem, setInputItem] = useState("");
  const [tasks, setTasks] = useState(getLocalItems());

  /*-- Creating styles --*/
  const style = () => {
    if(isDark) {
      return {backgroundColor: '#25273D' , color: 'white'}
    } else {
      return {backgroundColor: 'white', color: 'black'}
    }
  }

  const handleChange = (e) => {
    setInputItem(e.target.value)
  }
  
  /*-- Setting up tasks --*/
  const onFormSubmit = (e) => {
    e.preventDefault();
    if(inputItem.length >=1) {
      setTasks(prevData => [{task: inputItem, isCompleted: false, isDeleted: false}, ...prevData]) 
      setInputItem("")    
      }
  }

  /*-- Completing the task --*/
  const handleCompleted = (id) => {
    const updatedTasks = [...tasks]
    updatedTasks[id] = {task: updatedTasks[id].task, isCompleted: !updatedTasks[id].isCompleted}
    setTasks(updatedTasks)
  }

  /*-- Deleting the task --*/
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => tasks.indexOf(task) !== id)
    setTasks(newTasks)
  }

  /*-- Clearing all completed tasks --*/
  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => task.isCompleted === false)
    setTasks(newTasks);
  }

  /*-- Deleting all tasks --*/
  const deleteAllTasks = () => {
    setTasks([]);
  }

  /* -- Storing data in local storage --*/
   useEffect(() => {
     localStorage.setItem('tasks', JSON.stringify(tasks))
   }, [tasks])

  return (
    <main role='main' className='main-container'>
      <div className='main-heading'>
        <h1>TODO</h1>
        <img src= {isDark ? sunLogo : moonLogo} onClick={handleClickDarkMode} alt='Light-Dark button' />
      </div>

      <form onSubmit={onFormSubmit} className='form-container'>
        <input type='text' 
          className='main-input'
          name='inputItem' 
          placeholder='Create a new task...' 
          value={inputItem}
          style = {style()}
          onChange={handleChange} />
      </form>

      <div>
        {tasks.length!==0 &&
            tasks.map((task, index) => <SingleTask task={task} id={index} key={index} handleCompleted={handleCompleted} handleDelete={handleDelete} isDark={isDark}/> )}
      </div>

      <div className='task-details' style={style()}>
          <p>{tasks.length} items left</p>
          <button disabled={tasks.length===0} onClick={deleteAllTasks}>Delete All</button>
          <button disabled={tasks.length===0} onClick={clearCompleted}>Clear Completed</button>
      </div>
    </main>
)
}

export default NewTask