import api from '@forge/api';

export const requestJiraApi = async (url, options = {}, responseType = 'json') => {
    try {
      const response = await api.asUser().requestJira(url, options);
      if (!response.ok) {
        throw new Error(`Failed request: ${response.status} ${response.statusText}`);
      }
  
      if (responseType === 'text') {
        return await response.text();
      } else if (responseType === 'json') {
        return await response.json();
      } else {
        throw new Error(`Unsupported response type: ${responseType}`);
      }
    } catch (error) {
      console.error(`Error during Jira API request:`, error);
      throw error;
    }
  };