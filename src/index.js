import Resolver from '@forge/resolver';
import { getIssueDescription, createSubTaskIssue, deleteSubTasksAI, hasSubTasksByAI } from './services/jiraService.js';
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

resolver.define('hasSubTasksByAI', async (req) => {
  const issueKey = req.context.extension.issue.key;
  return await hasSubTasksByAI(issueKey);
});

resolver.define('deleteSubTasksAI', async (req) => {
  const issueKey = req.context.extension.issue.key;
  return await deleteSubTasksAI(issueKey);
});


export const handler = resolver.getDefinitions();
