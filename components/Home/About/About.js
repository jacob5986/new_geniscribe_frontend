import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './about-style';
import Counter from '../Counter';

function About() {
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <div className={classes.puzzle}>
              <Box p={{ sm: 6 }}>
                <div className={cx(classes.deco, classes.deco1)} />
                <div className={cx(classes.deco, classes.deco2)} />
                <figure className={cx(classes.img, classes.big)}>
                  <img src={imgAPI.marketing[20]} alt="gallery" />
                </figure>
                <figure className={cx(classes.img, classes.medium)}>
                  <img src={imgAPI.marketing[19]} alt="gallery" />
                </figure>
                <figure className={cx(classes.img, classes.small)}>
                  <img src={imgAPI.marketing[18]} alt="gallery" />
                </figure>
                <div className={cx(classes.deco, classes.deco3)} />
                <div className={cx(classes.deco, classes.deco4)} />
                <div className={cx(classes.deco, classes.deco5)} />
              </Box>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <h4 className={text.subtitle}>
              {t('marketing-landing.about_subtitle')}
            </h4>
            <Typography>
              Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.
            </Typography>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
