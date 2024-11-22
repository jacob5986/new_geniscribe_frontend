import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import useStyles from './service-card-style';

function ServiceCard(props) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const {
    img,
    title,
    desc,
    href,
  } = props;

  return (
    <Card className={classes.cardService}>
      <CardMedia
        className={classes.mediaProduct}
        image={img}
        title={title}
        component="figure"
      />
      <div className={classes.content}>
        <CardContent className={classes.text}>
          <h6 className={classes.title}>
            {title}
          </h6>
          <Typography component="p">
            {desc}
          </Typography>
        </CardContent>
        <div>
          <Button
            fullWidth
            href={href}
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            {t('btn_detail')}
          </Button>
        </div>
      </div>
    </Card>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string,
};

ServiceCard.defaultProps = {
  href: '#',
};

export default ServiceCard;
