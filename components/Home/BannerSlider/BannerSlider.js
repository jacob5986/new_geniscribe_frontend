import React, { useState, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <div className={cx(classes.img, classes.backgroundBanner)}>
                <svg width="918px" height="369px" viewBox="0 0 918 369" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="deco-banner" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                      <polygon className={classes.secondaryLight} transform="translate(665.000000, 103.500000) scale(-1, 1) translate(-665.000000, -103.500000) " points="795 19 795 188 535 188" />
                      <polygon className={classes.accentLight} transform="translate(500.500000, 130.500000) scale(-1, 1) translate(-500.500000, -130.500000) " points="466 73 535 73 466 188" />
                      <polygon className={classes.primaryLight} transform="translate(875.500000, 42.500000) scale(-1, 1) translate(-875.500000, -42.500000) " points="875.5 0 889.370415 5.1253534 903.239559 10.2519783 910.620415 23.2312905 918 36.2118742 915.436726 50.9712645 912.873452 65.7319262 890.260441 85 860.74083 85 838.126548 65.7319262 835.563274 50.9712645 833 36.2118742 840.380856 23.2312905 847.760441 10.2519783 861.630856 5.1253534" />
                      <polygon className={classes.accentLight} transform="translate(435.000000, 201.500000) scale(-1, 1) translate(-435.000000, -201.500000) " points="435 159 446.499376 180.25 458 201.5 446.499376 222.75 435 244 423.499376 222.75 412 201.5 423.499376 180.25" />
                      <path d="M250.59544,299 C274.014488,299 293,317.960086 293,341.350244 C293,351.917326 289.122872,361.581125 282.714195,369 L223,309.195142 C230.417307,302.841166 240.056923,299 250.59544,299 Z" className={classes.primaryMain} />
                      <circle className={classes.primaryLight} cx="252.615385" cy="343.230769" r="25.7692308" />
                      <polygon className={classes.secondaryLight} points="200 47 200 177 0 177" />
                      <polygon className={classes.primaryLight} fillRule="nonzero" transform="translate(58.000000, 209.500000) scale(-1, -1) translate(-58.000000, -209.500000) " points="0 177 116 242 0 242" />
                    </g>
                  </g>
                </svg>
                <img
                  className="img-2d3d"
                  src={imgAPI.marketing[3]}
                  data-2d={imgAPI.marketing[2]}
                  data-3d={imgAPI.marketing[3]}
                  alt="background"
                />
              </div>
              <Container>
                <Grid container spacing={2} alignItems="center">
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={{ sm: 3 }} alignItems="center">
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('marketing-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('marketing-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" href="#" className={cx(classes.btnText, classes.button)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.marketing.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.marketing[5]}
                        className="img-2d3d"
                        data-2d={imgAPI.marketing[4]}
                        data-3d={imgAPI.marketing[5]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={cx(classes.imgSlide2, classes.img)}>
                      <img
                        src={imgAPI.marketing[7]}
                        className="img-2d3d"
                        data-2d={imgAPI.marketing[6]}
                        data-3d={imgAPI.marketing[7]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={{ sm: 3 }} alignItems="center">
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('marketing-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('marketing-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" href="#" className={cx(classes.btnText, classes.button)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.marketing.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={cx(classes.slide, classes.centerContent)}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ lg: 12 }}>
                      <div className={cx(classes.text, align.textCenter)}>
                        <h4 className={text.title}>
                          {t('marketing-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('marketing-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" href="#" className={cx(classes.btnText, classes.button)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.marketing.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.img, classes.hBanner)}>
                      <Box mt={{ xs: 10, md: 0 }}>
                        <img
                          src={imgAPI.marketing[9]}
                          className="img-2d3d"
                          data-2d={imgAPI.marketing[8]}
                          data-3d={imgAPI.marketing[9]}
                          alt="banner 3 3D"
                        />
                      </Box>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden mdDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

export default BannerSlider;
