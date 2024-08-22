import { invoke } from '@forge/bridge';

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