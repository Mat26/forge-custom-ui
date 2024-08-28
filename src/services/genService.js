import { requestExternalApi } from '../apis/genApi';

/**
 * Retrieves functions based on the description of a user story.
 * @param {string} description - The description of the user story.
 * @returns {Promise<Array>} - List of functions.
 */
export const generateFunctions = async (description) => {
    const url = 'https://132d-152-203-175-204.ngrok-free.app/api/get_functions';
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
export const generateTestCases = async (storyId, functionName) => {
    const url = 'https://132d-152-203-175-204.ngrok-free.app/api/generate_test_case';
    const body = { user_story: storyId, function_name: functionName };
    return await requestExternalApi(url, body);
  };
