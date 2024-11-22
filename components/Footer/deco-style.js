import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'deco_footer' })(theme => ({
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    background: 'url("/images/marketing/footer-deco.svg") repeat-x bottom',
    opacity: theme.palette.mode === 'dark' ? 0.2 : 1
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
