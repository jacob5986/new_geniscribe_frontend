import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'case_study' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    '& h4': {
      textTransform: 'capitalize'
    },
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
    position: 'relative',
    zIndex: 10
  },
  carousel: {},
  carouselWrap: {
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
    '& ul[class*="slick-dots"]': {
      bottom: -40
    },
    [`& .${classes.carousel}`]: {
      marginBottom: theme.spacing(5)
    }
  },
  item: {
    '& > div': {
      padding: theme.spacing(1),
      maxWidth: 300,
      '&:focus': {
        outline: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: 490
      }
    }
  },
  carouselProp: {
    width: 'auto !important',
    [theme.breakpoints.down('lg')]: {
      display: 'none !important'
    },
    '& div': {
      width: 359
    }
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    left: theme.spacing(-4),
    top: 140,
    '@media (min-width: 1400px)': {
      left: theme.spacing(-10)
    },
  },
  artwork: {
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    },
  },
  illustration: {
    width: '250px !important',
    left: 70,
    top: 120,
  },
  arrow: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
    zIndex: 10,
    width: '100%',
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    '& button': {
      position: 'absolute',
      zIndex: 10,
      borderRadius: 0,
      top: 200,
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)',
      height: 176,
      '& svg': {
        width: 40,
        height: 40,
      }
    },
    '@media (max-width: 1279px)': {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none',
      marginTop: 560
    },
  },
  next: {
    right: 0
  },
  prev: {
    left: 0
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
