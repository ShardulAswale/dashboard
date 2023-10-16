import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  circle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#1976D2',
    marginRight: theme.spacing(2),
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
  },
}));

const CardItem = ({ icon, title, value, growth }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box className={classes.circle}>
        <span className={classes.icon}>{icon}</span>
      </Box>
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h6">{value}</Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="body2">{growth}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardItem;
