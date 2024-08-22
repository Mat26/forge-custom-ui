import React, { useState } from 'react';
import { router } from '@forge/bridge';
import { getAllSubTaskIssue, deleteSubTask } from '../utils/api';
import '../styles/App.css'; 

const DeleteAllSubTaskButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  
  const handleFetchSuccess = () => {
    console.log("Sub-tasks deleted successfully");
    setIsLoading(false);
    router.reload();
  };

  
  const handleFetchError = (error) => {
    console.error('Failed to delete sub-tasks:', error);
    setIsLoading(false);
  };

  
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const listSubTask = await getAllSubTaskIssue();
      for(const subTask of listSubTask) {
        await deleteSubTask(subTask);
      }      
      handleFetchSuccess();
    } catch (error) {
      handleFetchError(error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading} className="button-jira button-jira-red">
      {isLoading ? 'Loading...' : 'Delete All Subtask'}
    </button>
  );
};

export default DeleteAllSubTaskButton;
