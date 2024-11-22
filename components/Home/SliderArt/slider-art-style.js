import { makeStyles } from 'tss-react/mui';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })(theme => ({
  figure: {
    width: 310,
    maxHeight: 400,
    marginTop: theme.spacing(5),
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease',
    '& img': {
      position: 'relative',
      width: '100%',
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(10)
    }
  },
  fade: {
    opacity: '0.15',
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
