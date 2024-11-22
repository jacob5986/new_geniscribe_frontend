import { makeStyles } from 'tss-react/mui';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  deco: {
    position: 'absolute',
    right: 0,
    top: 130,
    opacity: 0.3,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
