import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import imgAPI from "~/public/images/imgAPI";
import useStyles from "./about-style";
import Counter from "../Counter";

function About() {
  const { classes: text } = useText();
  const { t } = useTranslation("common");

  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <div className={classes.puzzle}>
              <Box p={{ sm: 6 }}>
                <img
                  src={imgAPI.background[6]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  alt="gallery"
                />
              </Box>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <h4 className={text.subtitle}>
              {t("marketing-landing.about_subtitle")}
            </h4>
            <Typography>
              Unleash your creativity and dive into the captivating world of
              LitRPG with the power of AI by your side. Whether you’re a
              seasoned author or a budding storyteller, our platform offers you
              the tools to craft immersive LitRPG books that captivate readers
              and bring your imaginative worlds to life.
            </Typography>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
