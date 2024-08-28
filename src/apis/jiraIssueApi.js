import { requestJiraApi } from '../apis/jiraApi';
import { route } from '@forge/api';

/**
 * Generates test cases based on a user story and function.
 * @param {string} storyId - ID of the user story.
 * @param {string} functionName - Name of the function.
 * @returns {Promise<Object>} - Generated test cases.
 */
  export const getAllSubTaskIssue = async (issueKey) => {
    const url = route`/rest/api/3/issue/${issueKey}?fields=subtasks`;
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    const result = await requestJiraApi(url, options, 'json');
    return result.fields.subtasks.map(subtask => subtask.id);
  };

export const getLabelsBySubTaskIssue = async (issueKey) => {
    const url = route`/rest/api/3/issue/${issueKey}?fields=labels`;
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    const result = await requestJiraApi(url, options, 'json');
    return result.fields.labels;
  };

/**
   * Generates test cases based on a user story and function.
   * @param {string} subtaskId - Name of the function.
   * @returns {Promise<Object>} - Generated test cases.
   */
export const deleteSubTask = async (subtaskId) => {
    const url = route`/rest/api/3/issue/${subtaskId}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    const result = await requestJiraApi(url, options, 'text');
    return result;
  };