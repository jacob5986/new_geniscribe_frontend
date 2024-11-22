import React, { useState, useRef, Fragment } from "react";
import Lightbox from "react-18-image-lightbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Carousel from "react-slick";
import PrevIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/ArrowForward";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import imgAPI from "~/public/images/imgAPI";
import { useText } from "~/theme/common";
import link from "~/public/text/link";
import SliderArt from "../SliderArt";
import DecoLight from "../Deco/Light";
import CaseCard from "../../Cards/CaseCard";
import useStyles from "./case-study-style";

const caseData = [
  {
    bg: imgAPI.casestudies[0],
    logo: "/images/logos/cloud.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "big",
  },
  {
    bg: imgAPI.casestudies[1],
    logo: "/images/logos/fashion.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[0],
    logo: "/images/logos/mobile.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[1],
    logo: "/images/logos/profile.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[0],
    logo: "/images/logos/architect.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[1],
    logo: "/images/logos/cloud.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "big",
  },
  {
    bg: imgAPI.casestudies[0],
    logo: "/images/logos/fashion.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[1],
    logo: "/images/logos/fashion.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[0],
    logo: "/images/logos/fashion.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
  {
    bg: imgAPI.casestudies[1],
    logo: "/images/logos/cloud.png",
    title: "Donec commodo convallis ligula",
    desc: "Vestibulum consequat hendrerit",
    size: "medium",
  },
];

function CaseStudies() {
  // Translation Function
  const { t } = useTranslation("common");

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [slideCount, setSlideCount] = useState(0);
  const slider = useRef(null);

  // Carousel setting
  const [fade, setFade] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current) => {
      setSlideCount(current);
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
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + caseData.length - 1) % caseData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + caseData.length + 1) % caseData.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  return (
    <Fragment>
      {open && (
        <Lightbox
          mainSrc={caseData[photoIndex].bg || caseData[photoIndex].logo}
          nextSrc={
            caseData[(photoIndex + 1) % caseData.length].bg ||
            caseData[(photoIndex + 1) % caseData.length].logo
          }
          prevSrc={caseData[(photoIndex + 1) % caseData.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <div className={classes.root}>
        <Container className={classes.carouselHeader}>
          <Box flex="1" px={{ xs: 1, md: 3 }}>
            <h4 className={cx(text.title2, text.capitalize)}>
              {t("marketing-landing.case_title")}
            </h4>
            <p className={text.subtitle2}>
              Our case studies highlight impactful solutions. They showcase
              real-world examples.
            </p>
          </Box>
          <Button
            href={link.marketing.product}
            color="primary"
            className={classes.viewAll}
          >
            {t("btn_seeall")}
            <NextIcon className={classes.icon} />
          </Button>
        </Container>
        <div className={classes.carouselHandle}>
          <div className={classes.carouselWrap}>
            <Carousel className={classes.carousel} ref={slider} {...settings}>
              <div className={cx(classes.item, classes.carouselProp)}>
                <div />
              </div>
              <div className={classes.item}>
                <div>
                  <CaseCard
                    bg={caseData[0].bg || ""}
                    logo={caseData[0].logo}
                    title={caseData[0].title}
                    desc={caseData[0].desc}
                    size={caseData[0].size}
                    simple={caseData[0].simple || false}
                    openPopup={() => showPopup(0)}
                  />
                  <CaseCard
                    bg={caseData[1].bg || ""}
                    logo={caseData[1].logo}
                    title={caseData[1].title}
                    desc={caseData[1].desc}
                    size={caseData[1].size}
                    simple={caseData[1].simple || false}
                    openPopup={() => showPopup(1)}
                  />
                </div>
              </div>
              <div className={classes.item}>
                <div>
                  <CaseCard
                    bg={caseData[2].bg || ""}
                    logo={caseData[2].logo}
                    title={caseData[2].title}
                    desc={caseData[2].desc}
                    size={caseData[2].size}
                    simple={caseData[2].simple || false}
                    openPopup={() => showPopup(2)}
                  />
                  <CaseCard
                    bg={caseData[3].bg || ""}
                    logo={caseData[3].logo}
                    title={caseData[3].title}
                    desc={caseData[3].desc}
                    size={caseData[3].size}
                    simple={caseData[3].simple || false}
                    openPopup={() => showPopup(3)}
                  />
                  <CaseCard
                    bg={caseData[4].bg || ""}
                    logo={caseData[4].logo}
                    title={caseData[4].title}
                    desc={caseData[4].desc}
                    size={caseData[4].size}
                    simple={caseData[4].simple || false}
                    openPopup={() => showPopup(4)}
                  />
                </div>
              </div>
              <div className={classes.item}>
                <div>
                  <CaseCard
                    bg={caseData[5].bg || ""}
                    logo={caseData[5].logo}
                    title={caseData[5].title}
                    desc={caseData[5].desc}
                    size={caseData[5].size}
                    simple={caseData[5].simple || false}
                    openPopup={() => showPopup(5)}
                  />
                  <CaseCard
                    bg={caseData[6].bg || ""}
                    logo={caseData[6].logo}
                    title={caseData[6].title}
                    desc={caseData[6].desc}
                    size={caseData[6].size}
                    simple={caseData[6].simple || false}
                    openPopup={() => showPopup(6)}
                  />
                </div>
              </div>
              <div className={classes.item}>
                <div>
                  <CaseCard
                    bg={caseData[7].bg || ""}
                    logo={caseData[7].logo}
                    title={caseData[7].title}
                    desc={caseData[7].desc}
                    size={caseData[7].size}
                    simple={caseData[7].simple || false}
                    openPopup={() => showPopup(7)}
                  />
                  <CaseCard
                    bg={caseData[8].bg || ""}
                    logo={caseData[8].logo}
                    title={caseData[8].title}
                    desc={caseData[8].desc}
                    size={caseData[8].size}
                    simple={caseData[8].simple || false}
                    openPopup={() => showPopup(8)}
                  />
                  <CaseCard
                    bg={caseData[9].bg || ""}
                    logo={caseData[9].logo}
                    title={caseData[9].title}
                    desc={caseData[9].desc}
                    size={caseData[9].size}
                    simple={caseData[9].simple || false}
                    openPopup={() => showPopup(9)}
                  />
                </div>
              </div>
            </Carousel>
          </div>
          <nav className={classes.arrow}>
            <Button
              disabled={slideCount <= 0}
              variant="contained"
              color="primary"
              onClick={() => slider.current.slickPrev()}
              aria-label="prev"
              className={cx(classes.prev, classes.margin)}
            >
              <PrevIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => slider.current.slickNext()}
              aria-label="next"
              className={cx(classes.next, classes.margin)}
            >
              <NextIcon />
            </Button>
          </nav>
        </div>
        <div className={classes.floatingArtwork}>
          <Container fixed>
            <div className={classes.artwork}>
              <SliderArt fade={fade}>
                <div>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeIn"
                    duration={0.3}
                  >
                    <div>
                      <DecoLight />
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInLeftShort"
                    duration={0.5}
                    offset={250}
                    delay={300}
                  >
                    <div>
                      <img
                        src={imgAPI.marketing[15]}
                        data-2d={imgAPI.marketing[14]}
                        data-3d={imgAPI.marketing[15]}
                        className={cx(classes.illustration, "img-2d3d")}
                        alt="case-studies"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </SliderArt>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

CaseStudies.propTypes = {};

export default CaseStudies;
