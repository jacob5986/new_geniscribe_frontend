import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi_card' })((theme, _params, classes) => ({
  title: {},
  testiCard: {
    direction: 'ltr',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(3, 5),
    width: 280,
    height: 300,
    borderRadius: '0 0 0 100px',
    boxShadow: theme.shade.light,
    [theme.breakpoints.up('sm')]: {
      width: 320
    },
    '& p': {
      height: 80,
      overflow: 'hidden'
    }
  },
  rating: {
    marginTop: theme.spacing(4)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    boxSizing: 'content-box',
    marginLeft: theme.spacing(),
    borderRadius: '0 40px 0 0',
    border: `4px solid ${theme.palette.primary.main}`
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(3),
    position: 'relative',
    alignItems: 'center',
    [`& .${classes.avatar}`]: {
      width: 70,
      height: 70,
    },
    [`& .${classes.title}`]: {
      fontStyle: 'italic',
    },
  },
  name: {
    marginLeft: theme.spacing(2),
    '& h6': {
      fontSize: 16,
      fontWeight: theme.typography.fontweightBold
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
