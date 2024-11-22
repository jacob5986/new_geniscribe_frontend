import { makeStyles } from 'tss-react/mui';

const deco = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bottom: 0,
  left: 0,
};

const decorationStyles = makeStyles({ uniqId: 'decoration' })((theme, _params, classes) => ({
  leftDeco: {
    position: 'absolute'
  },
  rightDeco: {
    position: 'absolute'
  },
  formDeco: {
    ...deco,
    opacity: 0.2,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [`& .${classes.leftDeco}`]: {
      left: 0,
      top: '20%',
    },
    [`& .${classes.rightDeco}`]: {
      right: 0,
      top: '20%',
    }
  },
  pageDeco: {
    ...deco,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [`& .${classes.leftDeco}`]: {
      left: 0,
      bottom: 0,
    },
    [`& .${classes.rightDeco}`]: {
      right: 0,
      top: 0,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
