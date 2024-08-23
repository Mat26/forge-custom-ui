import React, { useState } from 'react';
import { router } from '@forge/bridge';
import { generateBodyNewIssueTask } from '../utils/issueUtils';
import { getIssueDescription, createSubTaskIssue } from '../apis/jiraApi';
import { generateFunctions, generateTestCases } from '../apis/genApi';
import '../styles/App.css'; 

const CreateSubTaskButton = () => {
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
      const description = await getIssueDescription();
      const functionsList = await generateFunctions(description);

      for (const func of functionsList) {
        const testCaseDescription = await generateTestCases(description, func);
        const issueBody = await generateBodyNewIssueTask(testCaseDescription.test_case);
        await createSubTaskIssue(issueBody);
      }
      handleFetchSuccess();
    } catch (error) {
      handleFetchError(error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading} className="button-jira">
      {isLoading ? 'Loading...' : 'Generate Test Cases'}
    </button>
  );
};

export default CreateSubTaskButton;
