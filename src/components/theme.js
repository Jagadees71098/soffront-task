import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
  },

  components: {
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          '& .MuiList-root':
          {
            '& .MuiListItem-root':
            {
              '&:nth-of-type(even)':
              {
                backgroundColor: '#efefef',
              },
              '& .MuiListItemText-root':
              {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                '& .MuiTypography-root':
                {
                  flex: 1,
                }

              },
            },
          },
        },
      },
    },
  },

});

export default theme;
