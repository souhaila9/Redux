import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTask from './AdTask';
import Task from './Task';
import { SetFilter } from '../Redux/actions/filterActions';
const ListTask = () => {
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filterTasks = tasks => {
        if (filter === "done") {
            return tasks.filter(task => task.isDone);
        }
        else if (filter === "not done"){
            return tasks.filter(task => !task.isDone);
        }
        else{
            return tasks
        }
    }
    const handleFilter = (filter) => {
        dispatch(SetFilter(filter));
    }
  return (
    <div>
        <h1>ToDo list</h1>
        <AddTask />
        {filterTasks(tasks).map(task =>(
            <Task key={task.id} task={task} />
        ))}
        <button onClick={() => handleFilter("ALL")}>All</button>
            <button onClick={() => handleFilter("done")}>Done</button>
            <button onClick={() => handleFilter("not done")}>Not Done</button>

    </div>
  )
}

export default ListTask