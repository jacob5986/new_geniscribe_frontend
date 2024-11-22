import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <h3 className={cx(classes.primaryLine, text.title)}>
                  +200
                </h3>
                <p className={text.subtitle}>
                  {t('marketing-landing.about_employee')}
                </p>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <h3 className={cx(classes.secondaryLine, text.title)}>
                  +500
                </h3>
                <p className={text.subtitle}>
                  {t('marketing-landing.about_projects')}
                </p>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <h3 className={cx(classes.accentLine, text.title)}>
                  +300
                </h3>
                <p className={text.subtitle}>
                  {t('marketing-landing.about_client')}
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Counter.propTypes = {

};

export default Counter;
