import React, { useState, useEffect } from 'react';
import { router } from '@forge/bridge';
import { deleteSubTasksAI, hasSubTasksByAI } from '../apis/jiraApi';
import '../styles/App.css'; 

const DeleteAllSubTaskButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubTasks, setHasSubTasks] = useState(false);

  useEffect(() => {
    const fetchSubTasks = async () => {
      setIsLoading(true);
      try {
        setHasSubTasks(await hasSubTasksByAI());
      } catch (error) {
        console.error('Failed to fetch sub-tasks:', error);
        setHasSubTasks(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubTasks();
  }, []);
  
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
      await deleteSubTasksAI();     
      handleFetchSuccess();
    } catch (error) {
      handleFetchError(error);
    }
  };

  return (
    <>
    {hasSubTasks && (
        <button 
          onClick={handleClick} 
          disabled={isLoading}
          className="button-jira button-jira-red"
        >
          {isLoading ? 'Loading...' : 'Delete All Subtasks'}
        </button>
    )}
    </>
  );  
};

export default DeleteAllSubTaskButton;
