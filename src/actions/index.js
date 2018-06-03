import {ADD_REMINDER} from '../constant';
import {DELETE_REMINDER, CLEAR_REMINDERS} from '../constant';

export const addReminder = (text, dueDate) => {
   const action = {
     type: ADD_REMINDER,
     text,
     dueDate
   }

   console.log('ACTION', action);
   return action;
}


export const deleteReminder = (id) =>{
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
