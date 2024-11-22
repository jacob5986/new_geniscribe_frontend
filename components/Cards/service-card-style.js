import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'service_card' })(theme => ({
  cardService: {
    borderRadius: 0,
    width: 240,
    height: 380,
    direction: 'ltr',
    overflow: 'hidden',
    margin: theme.spacing(3, 1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 2)
    },
    '& figure': {
      margin: 0,
      overflow: 'hidden',
      height: 170,
      marginBottom: theme.spacing(3),
      '& img': {
        minHeight: '100%',
        width: '100%'
      }
    },
    '& p': {
      height: 70,
      overflow: 'hidden',
      marginBottom: theme.spacing(3)
    }
  },
  mediaProduct: {
    height: 0,
  },
  title: {
    fontSize: 18,
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  },
  content: {
    padding: theme.spacing(0, 2.5),
  },
  text: {
    marginRight: theme.spacing(2),
    padding: 0
  },
  button: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
