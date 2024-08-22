import React, { useState } from 'react';
import { router } from '@forge/bridge';
import { generateBodyNewIssueTask } from '../utils/issueUtils';
import { fetchDescription, generateFunctions, generateTestCases, createSubTaskIssue } from '../utils/api';
import '../styles/App.css'; 

const CreateSubTaskIssue = () => {
  const [isLoading, setIsLoading] = useState(false);

  
  const handleFetchSuccess = () => {
    console.log("Sub-tasks created successfully");
    setIsLoading(false);
    router.reload();
  };

  
  const handleFetchError = (error) => {
    console.error('Failed to create sub-tasks:', error);
    setIsLoading(false);
  };

  
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const description = await fetchDescription();
      const functionsList = await generateFunctions(description);

      for (const func of functionsList) {
        const testCaseDescription = await generateTestCases(description, func);
        const issueBody = await generateBodyNewIssueTask(testCaseDescription.test_case);
        // Uncomment the line below to enable sub-task creation
        // await createSubTaskIssue(issueBody);
      }

      handleFetchSuccess();
    } catch (error) {
      handleFetchError(error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading} className="button-jira">
      {isLoading ? 'Loading...' : 'Create Test Cases'}
    </button>
  );
};

export default CreateSubTaskIssue;
