import { requestJiraApi, requestExternalApi } from './api';
import { route } from '@forge/api';

/**
 * Retrieves the description of an issue in Jira.
 * @param {string} issueKey - The key of the issue.
 * @returns {Promise<string>} - The description of the issue.
 */
export const fetchIssueDescription = async (issueKey) => {
    const url = route`/rest/api/2/issue/${issueKey}?fields=description`;
    const data = await requestJiraApi(url);
    return data.fields.description;
  };
  
/**
 * Creates a sub-task in Jira.
 * @param {Object} subTaskBody - The request body for creating the sub-task.
 * @returns {Promise<Object>} - Details of the created sub-task.
 */
export const createSubTaskIssue = async (subTaskBody) => {
    const url = route`/rest/api/2/issue`;
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subTaskBody),
    };
    const result = await requestJiraApi(url, options);
    return {
      issueKey: result.key,
    };
  };
  
/**
 * Retrieves functions based on the description of a user story.
 * @param {string} description - The description of the user story.
 * @returns {Promise<Array>} - List of functions.
 */
export const fetchFunctions = async (description) => {
    const url = 'https://a009-152-203-179-178.ngrok-free.app/api/get_functions';
    const body = { user_story: description };
    const result = await requestExternalApi(url, body);
    return result.functions;
  };
  
  
/**
 * Generates test cases based on a user story and function.
 * @param {string} storyId - ID of the user story.
 * @param {string} functionName - Name of the function.
 * @returns {Promise<Object>} - Generated test cases.
 */
export const fetchGenerateTestCases = async (storyId, functionName) => {
    const url = 'https://a009-152-203-179-178.ngrok-free.app/api/generate_test_case';
    const body = { user_story: storyId, function_name: functionName };
    return await requestExternalApi(url, body);
  };