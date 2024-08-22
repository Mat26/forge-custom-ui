import { view } from '@forge/bridge';
import { buildIssueStructure } from './issueBody';

export const generateBodyNewIssueTask = async (descriptionTestCase) => {
  try {
    const context = await view.getContext();
    const projectKey = context.extension.project.key;
    const reporter = context.accountId;
    const parent = context.extension.issue.key;
    return buildIssueStructure(projectKey, descriptionTestCase, reporter, parent);
  } catch (error) {
    console.error('Error generating issue body:', error);
    throw error;
  }
};
