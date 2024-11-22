import { makeStyles } from 'tss-react/mui';

const sliderStyle = makeStyles({ uniqId: 'slider_banner' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: 0
    }
  },
  btnArea: {
    [`& .${classes.btnText}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    '& > .MuiButton-root': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(4)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2)
      }
    },
    [`& .${classes.button}`]: {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: 280,
        marginBottom: theme.spacing(2)
      }
    }
  },
  centerContent: {
    paddingTop: theme.spacing(10),
    [`& .${classes.btnArea}`]: {
      margin: 0
    },
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    position: 'relative',
    '& img': {
      marginTop: 80,
      maxWidth: 560,
      maxHeight: 320,
      [theme.breakpoints.down('md')]: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    [theme.breakpoints.up('md')]: {
      height: 560,
      [`& .${classes.centerContent}`]: {
        paddingTop: theme.spacing(10)
      }
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      height: 'auto',
      padding: theme.spacing(15, 0, 5),
      '& img': {
        marginTop: `${theme.spacing(2)} !important`
      }
    },
  },
  imgSlide2: {
    '& img': {
      [theme.breakpoints.down('lg')]: {
        right: 60,
        position: 'relative'
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    right: theme.direction === 'rtl' ? 'auto' : -90,
    left: theme.direction === 'rtl' ? -90 : 'auto',
    display: 'none',
    [theme.breakpoints.between('md', 'xl')]: {
      display: 'block',
    },
    '& img': {
      maxWidth: 480,
      position: 'relative'
    },
    '& svg': {
      position: 'absolute',
      bottom: -20,
      left: theme.direction === 'rtl' ? 'auto' : 0,
      right: theme.direction === 'rtl' ? 0 : 'auto',
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      }
    }
  },
  primaryLight: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  primaryMain: {
    fill: theme.palette.primary.main
  },
  secondaryLight: {
    fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
  },
  accentLight: {
    fill: theme.palette.mode === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      height: 160,
      margin: `${theme.spacing(4)} auto ${theme.spacing(2)}`,
      [theme.breakpoints.down('md')]: {
        maxWidth: 'none'
      },
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    direction: 'ltr',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1, 2),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:after': {
      content: '""',
      width: '0%',
      position: 'absolute',
      left: -4,
      top: 26,
      opacity: 0,
      borderLeft: `10px solid ${theme.palette.secondary.main}`,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)',
      transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: 'none',
      '&:after': {
        opacity: 1
      }
    },
    [`&.${classes.active}`]: {
      '& strong': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      },
      '&:after': {
        opacity: 1
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
