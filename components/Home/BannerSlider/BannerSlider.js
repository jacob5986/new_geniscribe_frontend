import React, { useState, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import Carousel from "react-slick";
import { useTranslation } from "next-i18next";
import link from "~/public/text/link";
import imgAPI from "~/public/images/imgAPI";
import { useText, useTextAlign } from "~/theme/common";
import useStyles from "./slider-style";

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation("common");
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const handleAfterChange = (currentSlide) => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = (slide) => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap} style={{ marginTop: "80px" }}>
      <div className={classes.carousel}>
        <Carousel
          className={classes.slider}
          style={{
            height: "60vh",
          }}
          {...slickOptions}
          ref={slider}
          afterChange={handleAfterChange}
        >
          <div>
            <img
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              src={imgAPI.background[0]}
              className="img-2d3d"
              alt="banner 1 3D"
            />
          </div>
          <div>
            <img
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              src={imgAPI.background[1]}
              className="img-2d3d"
              alt="banner 1 3D"
            />
          </div>
          <div>
            <img
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              src={imgAPI.background[2]}
              className="img-2d3d"
              alt="banner 1 3D"
            />
          </div>
          <div>
            <img
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              src={imgAPI.background[3]}
              className="img-2d3d"
              alt="banner 1 3D"
            />
          </div>
          <div>
            <img
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              src={imgAPI.background[4]}
              className="img-2d3d"
              alt="banner 1 3D"
            />
          </div>
          <div>
            <img
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              src={imgAPI.background[5]}
              className="img-2d3d"
              alt="banner 1 3D"
            />
          </div>
        </Carousel>
      </div>
      {/* <Hidden mdDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={cx(
                classes.btnNav,
                curSlide === 0 ? classes.active : ""
              )}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider
              className={classes.divider}
              orientation="vertical"
              flexItem
            />
            <ButtonBase
              className={cx(
                classes.btnNav,
                curSlide === 1 ? classes.active : ""
              )}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider
              className={classes.divider}
              orientation="vertical"
              flexItem
            />
            <ButtonBase
              className={cx(
                classes.btnNav,
                curSlide === 2 ? classes.active : ""
              )}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden> */}
    </div>
  );
}

export default BannerSlider;
