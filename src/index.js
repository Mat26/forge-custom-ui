import Resolver from '@forge/resolver';
import { fetchIssueDescription, createSubTaskIssue, fetchAllSubTaskIssue, deleteSubTask } from './services/jiraService.js';
import { fetchFunctions, fetchGenerateTestCases } from './services/genService.js';


const resolver = new Resolver();

resolver.define('fetchDescription', async (req) => {
  const issueKey = req.context.extension.issue.key;
  return await fetchIssueDescription(issueKey);
});

resolver.define('generateFunctions', async (req) => {
  const description = req.payload;
  return await fetchFunctions(description);
});

resolver.define('generateTestCases', async (req) => {
  const { userStory, functionName } = req.payload;
  return await fetchGenerateTestCases(userStory, functionName);
});

resolver.define('createSubTaskIssue', async (req) => {
  const subTaskBody = req.payload;
  return await createSubTaskIssue(subTaskBody);
});

resolver.define('getAllSubTaskIssue', async (req) => {
  const issueKey = req.context.extension.issue.key;
  return await fetchAllSubTaskIssue(issueKey);
});

resolver.define('deleteSubTask', async (req) => {
  const subtaskId = req.payload;
  return await deleteSubTask(subtaskId);
});


export const handler = resolver.getDefinitions();
