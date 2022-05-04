import React from "react";
//import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// /import TextField from '@mui/material/TextField';
//import { arr } from './data';

export const Comments = (props) => {
  const { comments } = props;
  // const filtered = arr.filter(a => {
  //   return a.messageTo.includes('Sandra');
  // })
  return (
    <div>
      {comments.map(x => <List key={x.id} sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={x.name} />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <span>{x.name}</span>
                  <span className="comment-text">{x.comment}</span>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>)}
    </div>
  );
};

