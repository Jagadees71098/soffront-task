import React from 'react';
import { Grid } from '@mui/material';
import UserCard from './UserCard';

function UserList({ users }) {
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={12} md={6} key={user.id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
}

export default UserList;
