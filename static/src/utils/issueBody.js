export const buildIssueStructure = (projectKey, description, reporter, parent) => {
    return {
      "fields": {
          "project": {
              "key": projectKey
          }, 
          "summary": "Validate Check Constraints violation for the AMC table",
          "description": description,
          "issuetype": 
          {
              "id": "10005", 
              "name": "Subtask"
          },
          "reporter": { "id": reporter },
          "parent": { "key": parent },
          "labels": ["AI"]
      }
    }
  };