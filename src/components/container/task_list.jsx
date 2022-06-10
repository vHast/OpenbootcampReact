// App renderizara a task_list.jsx y task_list.jsx renderizara a task.jsx de components/pure

import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task'


const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

  const changeState = (id) => {
    console.log('TODO: Cambiar el estado de una tarea')
  }
  
    return (
      <div>
        <div>
          <h1>
          Your Tasks:
          </h1>
        </div>
        {/* TODO: Aplicar un For/Map para renderizar una lista */}
        <TaskComponent task={defaultTask}> </TaskComponent>
      </div>
    );
    
}



export default TaskListComponent;
