import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Carousel from 'react-slick';
import PrevIcon from '@mui/icons-material/ArrowBack';
import NextIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './services-style';
import SliderArt from '../SliderArt';
import DecoMountain from '../Deco/Mountain';
import ServiceCard from '../../Cards/ServiceCard';

const servicesList = [
  {
    title: 'Lorem Ipsum',
    desc: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: imgAPI.marketing[21]
  },
  {
    title: 'Etiam rhoncus',
    desc: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: imgAPI.marketing[22]
  },
  {
    title: 'Duis fermentum',
    desc: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: imgAPI.marketing[23]
  },
  {
    title: 'Lorem Ipsum',
    desc: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: imgAPI.marketing[24]
  },
  {
    title: 'Etiam rhoncus',
    desc: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: imgAPI.marketing[25]
  },
  {
    title: 'Duis fermentum',
    desc: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: imgAPI.marketing[26]
  }
];

function Services() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const slider = useRef(null);
  const [fade, setFade] = useState(false);
  const { classes: text } = useText();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: current => {
      if (current > 0) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <Box flex="1" px={{ xs: 1, md: 3 }}>
          <h4 className={cx(text.title2, text.capitalize)}>
            {t('marketing-landing.services_title')}
          </h4>
          <p className={text.subtitle2}>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </Box>
        <Button
          href={link.marketing.product}
          color="primary"
          className={classes.viewAll}
        >
          {t('btn_seeall')}
          <NextIcon className={classes.icon} />
        </Button>
      </Container>
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            <div className={classes.item}>
              <div className={classes.carouselProp}>
                <div />
              </div>
            </div>
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <ServiceCard
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <div className={classes.artwork}>
            <SliderArt fade={fade}>
              <ScrollAnimation animateOnce animateIn="fadeIn" duration={0.3}>
                <div>
                  <DecoMountain />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-250} delay={300} duration={0.5}>
                <div>
                  <img
                    src={imgAPI.marketing[11]}
                    data-2d={imgAPI.marketing[10]}
                    data-3d={imgAPI.marketing[11]}
                    className="img-2d3d"
                    alt="services 3d"
                  />
                </div>
              </ScrollAnimation>
            </SliderArt>
            <nav className={classes.arrow}>
              <Fab size="small" onClick={() => slider.current.slickNext()} aria-label="prev" className={classes.margin}>
                <PrevIcon />
              </Fab>
              <Fab size="small" onClick={() => slider.current.slickPrev()} aria-label="next" className={classes.margin}>
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

Services.propTypes = {

};

export default Services;
