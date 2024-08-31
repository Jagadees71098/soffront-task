import React, { useState, useEffect } from 'react';
import { Container, Typography, Pagination } from '@mui/material';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import theme from './components/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [sortOption, setSortOption] = useState('name_asc'); // Default sort option

  useEffect(() => {
    if (query) {
      fetchUsers(query, currentPage);
    }
  }, [query, currentPage, sortOption]); // Fetch users whenever query, page, or sort option changes

  const fetchUsers = (searchQuery, page) => {
    const url = `https://api.github.com/search/users?q=${searchQuery}&per_page=${usersPerPage}&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let sortedUsers = data.items || [];
        sortedUsers = applySorting(sortedUsers, sortOption); // Apply sorting
        setUsers(sortedUsers);
        setTotalCount(data.total_count || 0);
      })
      .catch((err) => console.error('Error fetching users:', err));
  };

  const applySorting = (users, sortOption) => {
    switch (sortOption) {
      case 'name_asc':
        return users.sort((a, b) => a.login.localeCompare(b.login));
      case 'name_desc':
        return users.sort((a, b) => b.login.localeCompare(a.login));
      case 'rank_asc':
        return users.sort((a, b) => a.score - b.score); // Assuming `score` is the rank
      case 'rank_desc':
        return users.sort((a, b) => b.score - a.score);
      default:
        return users;
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption); // Update sort option
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update the current page
  };

  console.log(useTheme())
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchBar onSearch={handleSearch} onSortChange={handleSortChange} />
        
        {totalCount > 0 && (
          <Typography variant="subtitle1" my={2} gutterBottom>
            Total Results: {totalCount}
          </Typography>
        )}
        <UserList users={users} />
        {totalCount > usersPerPage && (
          <Pagination
            count={Math.ceil(totalCount / usersPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }}
          />
        )}
      </Container>
    </ThemeProvider >
  );
}

export default App;
