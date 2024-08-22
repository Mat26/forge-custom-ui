import { invoke } from '@forge/bridge';

/**
 * Fetches the description of an issue from Jira.
 * @returns {Promise<string>} - The description of the issue.
 */
export const fetchDescription = async () => {
  return await invoke('fetchDescription');
};

/**
 * Generates a list of functions based on a user story description.
 * @param {string} description - The description of the user story.
 * @returns {Promise<Array>} - List of functions.
 */
export const generateFunctions = async (description) => {
  return await invoke('generateFunctions', description);
};

/**
 * Generates test cases based on a user story and function.
 * @param {string} storyId - ID of the user story.
 * @param {string} functionName - Name of the function.
 * @returns {Promise<Object>} - Generated test cases.
 */
export const generateTestCases = async (storyId, functionName) => {
  return await invoke('generateTestCases', { userStory: storyId, functionName });
};

/**
 * Creates a sub-task issue in Jira.
 * @param {Object} subTaskBody - The body of the sub-task issue.
 * @returns {Promise<Object>} - Details of the created sub-task.
 */
export const createSubTaskIssue = async (subTaskBody) => {
  return await invoke('createSubTaskIssue', subTaskBody);
};
