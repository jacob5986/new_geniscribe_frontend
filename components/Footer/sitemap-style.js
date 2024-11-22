import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const footerStyles = makeStyles({ uniqId: 'sitemap' })((theme) => ({
  root: {
    position: 'relative'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    position: 'relative',
    zIndex: 1,
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(15),
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 16,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 3),
        textAlign: 'center'
      }
    }
  },
  title: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    fontSize: 24,
    fontWeight: theme.typography.fontWeightBold,
    '& img': {
      width: 48,
      marginRight: theme.spacing(),
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      background: alpha(theme.palette.divider, 0.1),
      width: 36,
      height: 36,
      lineHeight: '36px',
      '& i': {
        color: theme.palette.primary.main
      }
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  accordionContent: {
    margin: 0,
    '& strong': {
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
    }
  },
  accordionIcon: {
    padding: 0
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
