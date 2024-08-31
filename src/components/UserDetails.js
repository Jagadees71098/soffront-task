import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function UserDetails({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <List>
      {repos.map((repo) => (
        <ListItem key={repo.id}>
          <ListItemText
            primary={repo.name}
            secondary={`Language: ${repo.language} | Stars: ${repo.stargazers_count}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default UserDetails;
