import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'speciality' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(3)
      }
    }
  },
  desc: {
    lineHeight: '32px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0),
    }
  },
  runningTag: {
    position: 'relative',
    height: 130,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4)
    },
    '& div[class*="slick-active"]': {
      [`& .${classes.tagItem}`]: {
        '&:first-of-type': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
          borderColor: theme.palette.primary.main
        },
        '&:nth-of-type(2)': {
          color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.main
        },
        '&:last-child': {
          color: theme.palette.mode === 'dark' ? theme.palette.accent.light : theme.palette.accent.dark,
          borderColor: theme.palette.accent.main
        }
      }
    },
    '& div[class*="slick-current"]': {
      [`& .${classes.tagItem}`]: {
        background: 'none !important',
        color: `${theme.palette.text.primary} !important`,
        borderColor: `${theme.palette.divider} !important`,
      }
    },
  },
  tagItem: {
    display: 'inline-block',
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 4),
    },
  },
  tagGroup: {
    display: 'block',
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  illustrationWrap: {
    position: 'relative',
    '& figure': {
      maxWidth: 370,
      position: 'relative',
      '& img': {
        width: '100%',
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
