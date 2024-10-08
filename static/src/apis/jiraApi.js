import { invoke } from '@forge/bridge';

/**
 * Fetches the description of an issue from Jira.
 * @returns {Promise<string>} - The description of the issue.
 */
export const getIssueDescription = async () => {
  return await invoke('getIssueDescription');
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
  export const hasSubTasksByAI = async () => {
    return await invoke('hasSubTasksByAI');
  };
  
  /**
   * Deletes a sub-task AI issue in Jira.
   * @param {Object} subTask - The sub-task object to be deleted.
   * @returns {Promise<void>} - A promise that resolves when the sub-task has been deleted.
   */
  export const deleteSubTasksAI = async () => {
    return await invoke('deleteSubTasksAI');
  };