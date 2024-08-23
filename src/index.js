import Resolver from '@forge/resolver';
import { getIssueDescription, createSubTaskIssue, getAllSubTaskIssue, deleteSubTask } from './services/jiraService.js';
import { generateFunctions, generateTestCases } from './services/genService.js';


const resolver = new Resolver();

resolver.define('getIssueDescription', async (req) => {
  const issueKey = req.context.extension.issue.key;
  return await getIssueDescription(issueKey);
});

resolver.define('generateFunctions', async (req) => {
  const description = req.payload;
  return await generateFunctions(description);
});

resolver.define('generateTestCases', async (req) => {
  const { userStory, functionName } = req.payload;
  return await generateTestCases(userStory, functionName);
});

resolver.define('createSubTaskIssue', async (req) => {
  const subTaskBody = req.payload;
  return await createSubTaskIssue(subTaskBody);
});

resolver.define('getAllSubTaskIssue', async (req) => {
  const issueKey = req.context.extension.issue.key;
  return await getAllSubTaskIssue(issueKey);
});

resolver.define('deleteSubTask', async (req) => {
  const subtaskId = req.payload;
  return await deleteSubTask(subtaskId);
});


export const handler = resolver.getDefinitions();
