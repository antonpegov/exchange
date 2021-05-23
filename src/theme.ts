import { createMuiTheme } from '@material-ui/core/styles'

export const COLOR_PRIMARY = '#020941'
export const COLOR_BLUE_PRIMARY = '#2699fb'
export const COLOR_BLUE_SECCONDARY = '#84c6ff'
const WHITE = 'white'
const INPUT_UNDERLINE_COLOR = COLOR_BLUE_SECCONDARY

export const theme = createMuiTheme({
  palette: {
    action: {
      disabled: 'set color of text here',
    },
    primary: {
      main: COLOR_PRIMARY,
    },
  },

  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem',
        fontFamily: '"Exo 2", "Roboto", "Helvetica", "Arial", sans-serif',
        margin: '5px',
      },
      outlinedPrimary: {
        backgroundColor: COLOR_PRIMARY,
        border: `solid 2px ${COLOR_BLUE_PRIMARY}`,
        color: WHITE,
        '&:hover': {
          backgroundColor: COLOR_PRIMARY,
          border: `solid 2px ${COLOR_BLUE_SECCONDARY}`,
        },
      },
      containedPrimary: {
        // backgroundColor: 'linear-gradient(90deg, rgba(132,198,255,1) 10%,
        // rgba(38,153,251,1) 100%)',
        backgroundColor: COLOR_BLUE_PRIMARY,
        color: WHITE,
        '&:hover': {
          backgroundColor: COLOR_BLUE_SECCONDARY,
        },
      },
    },

    MuiTextField: {
      root: {
        display: 'flex',
        marginBottom: '10px',
      }
    },

    MuiDialog: {
      root: {
        minWidth: '350px',
      },
    },

    MuiFab: {
      root: {
        backgroundColor: 'aliceblue',
        color: 'lightcoral',
        height: '40px',
        position: 'absolute',
        width: '40px',
        zIndex: 100,
      }
    },

    MuiInput: {
      colorSecondary: {
        color: WHITE,
      },

      underline: {
        borderBottomColor: INPUT_UNDERLINE_COLOR,

        '&:not($disabled):after': {
          borderBottomColor: INPUT_UNDERLINE_COLOR,
        },

        '&:hover:not($disabled):after': {
          borderBottomColor: INPUT_UNDERLINE_COLOR,
        },

        '&:not($disabled):before': {
          borderBottomColor: INPUT_UNDERLINE_COLOR,
        },

        '&:hover:not($disabled):before': {
          borderBottomColor: INPUT_UNDERLINE_COLOR,
        },
      },
    },
  },
})
