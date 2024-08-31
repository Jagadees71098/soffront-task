import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch, onSortChange }) {
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('name_asc');

  const handleSearch = () => {
    onSearch(searchText);  // Trigger search when the icon is clicked
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} py={5}>
        <Grid item xs={12} md={5}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              value={sortOption}
              label="Sort By"
              onChange={handleSortChange}
            >
              <MenuItem value="name_asc">Name (A - Z)</MenuItem>
              <MenuItem value="name_desc">Name (Z - A)</MenuItem>
              <MenuItem value="rank_asc">Rank ↑</MenuItem>
              <MenuItem value="rank_desc">Rank ↓</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            label="Search GitHub Users"
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBar;
