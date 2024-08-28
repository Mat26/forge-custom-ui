import { requestJiraApi } from '../apis/jiraApi';
import { route } from '@forge/api';
import { getAllSubTaskIssue, getLabelsBySubTaskIssue, deleteSubTask } from '../apis/jiraIssueApi';

/**
 * Retrieves the description of an issue in Jira.
 * @param {string} issueKey - The key of the issue.
 * @returns {Promise<string>} - The description of the issue.
 */
export const getIssueDescription = async (issueKey) => {
    const url = route`/rest/api/2/issue/${issueKey}?fields=description`;
    const data = await requestJiraApi(url, {}, 'json');
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
    const result = await requestJiraApi(url, options, 'json');
    return {
      issueKey: result.key,
    };
  };

export const hasSubTasksByAI = async (issueKey) => {
  const subTasksByAI = await getAllSubTaskAI(issueKey);
  return subTasksByAI.length > 0;
}

export const deleteSubTasksAI = async (issueKey) =>{
  const subTasksIdAI = await getAllSubTaskAI(issueKey);
  for(const subTaskIdAI of subTasksIdAI) {
    await deleteSubTask(subTaskIdAI);
  }
}

const getAllSubTaskAI = async (issueKey) => {
  const subtasksId = await getAllSubTaskIssue(issueKey);
  const subtasksByAI = [];
  for(const subtaskId of subtasksId) {
    const subtaskLabels = await getLabelsBySubTaskIssue(subtaskId);
    const hasLabelCreatedByAI = subtaskLabels && subtaskLabels.includes("AI");
    if (hasLabelCreatedByAI) {
      subtasksByAI.push(subtaskId);
    }
  }
  return subtasksByAI;
}