import { Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const {title,description,urlToImage}=props.articles;
    return (
        <Card variant='elevation' sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt="Paella dish"
        />
        
        <Collapse timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
};

export default News;