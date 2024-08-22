import { invoke } from '@forge/bridge';

/**
 * Fetches the description of an issue from Jira.
 * @returns {Promise<string>} - The description of the issue.
 */
export const fetchDescription = async () => {
  return await invoke('fetchDescription');
};

/**
 * Creates a sub-task issue in Jira.
 * @param {Object} subTaskBody - The body of the sub-task issue.
 * @returns {Promise<Object>} - Details of the created sub-task.
 */
export const createSubTaskIssue = async (subTaskBody) => {
    return await invoke('createSubTaskIssue', subTaskBody);
  };
  
  /**
   * Retrieves all sub-tasks of an issue in Jira.
   * @returns {Promise<Array<Object>>} - A promise that resolves to an array of sub-task details.
   */
  export const getAllSubTaskIssue = async () => {
    return await invoke('getAllSubTaskIssue');
  };
  
  /**
   * Deletes a sub-task issue in Jira.
   * @param {Object} subTask - The sub-task object to be deleted.
   * @returns {Promise<void>} - A promise that resolves when the sub-task has been deleted.
   */
  export const deleteSubTask = async (subTask) => {
    return await invoke('deleteSubTask', subTask);
  };