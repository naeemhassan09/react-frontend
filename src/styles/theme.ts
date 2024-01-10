import { createTheme } from '@mui/material/styles';

// Define your color palette and styles here
const colors = {
  primaryMain: '#681818',
  errorMain: '#681818',
  white: '#fff',
  gray100: '#CFD8E1',
  errorBg: '#FDE1E1',
};

const styles = {
  gaps: {
    xs3: '0.63rem',
    xl: '1.25rem',
    zero: '0rem',
    smi: '0.81rem',
    xl9: '1.75rem',
    xl14: '2.06rem',
  },
  paddings: {
    xs3: '0.63rem',
    xl11: '1.88rem',
    xl16: '2.19rem',
    xl31: '3.13rem',
    xl51: '4.38rem',
    xl: '1.25rem',
    xl19: '2.38rem',
    xl21: '2.5rem',
  },
  borderRadius: {
    xs3: '10px',
    xl31: '50px',
    mini: '15px',
  },
  typography: {
    fontFamily: '\'Inter\', sans-serif',
    sizes: {
      sm: '0.88rem',
      xl: '1.25rem',
      lg: '1.13rem',
    },
  },
};

const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.primaryMain,
    },
    error: {
      main: colors.errorMain,
    },
  },
  typography: {
    fontFamily: styles.typography.fontFamily,
    // Define other typography settings using styles.typography.sizes
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          borderColor: colors.gray100,
          borderWidth: 1,
          '&.Mui-error': {
            backgroundColor: colors.errorBg,
            borderColor: colors.errorMain,
          },
        },
        input: {
          fontSize: styles.typography.sizes.sm,
          fontWeight: 400,
          borderRadius: styles.borderRadius.xs3,
          height: '40px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: styles.borderRadius.mini,
          fontSize: styles.typography.sizes.sm,
        },
      },
      defaultProps: {
        size: 'medium',
      },
    },
    // Add other component customizations as needed
  },
});

export default customTheme;
