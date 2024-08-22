import api from '@forge/api';

export const requestJiraApi = async (url, options = {}) => {
    try {
      const response = await api.asUser().requestJira(url, options);
      if (!response.ok) {
        throw new Error(`Failed request: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error during Jira API request:`, error);
      throw error;
    }
  };
  
export const requestExternalApi = async (url, body) => {
    const credentials = Buffer.from('user1:password1').toString('base64');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Failed external request: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error during external API request:`, error);
      throw error;
    }
  };