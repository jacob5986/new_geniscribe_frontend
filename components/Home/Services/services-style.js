import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'services' })(theme => ({
  root: {
    position: 'relative',
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  viewAll: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(10)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  carouselHandle: {
    height: 480,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
  },
  item: {
    '& > div': {
      width: 260
    },
    '&:focus': {
      outline: 'none'
    }
  },
  carouselProp: {
    width: 'auto !important',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& div': {
      width: theme.direction === 'rtl' ? 500 : 350
    }
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    right: theme.direction === 'rtl' ? 'auto' : theme.spacing(-4),
    left: theme.direction === 'rtl' ? theme.spacing(-4) : 'auto',
    top: 140,
    '@media (min-width: 1400px)': {
      left: theme.spacing(20)
    },
  },
  artwork: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    },
    '@media (min-width: 1400px)': {
      marginRight: theme.spacing(-10)
    }
  },
  arrow: {
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    marginTop: theme.spacing(4),
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    '& button': {
      background: theme.palette.background.paper,
      margin: theme.spacing(0.5),
      boxShadow: theme.shade.light,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    [theme.breakpoints.down(1280)]: {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none',
      marginTop: 560
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
