import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { ContractStore } from '../observables/Contract';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EventNote from '@material-ui/icons/EventNote';
import FunctionsIcon from '@material-ui/icons/Functions';

type Props = {
  state: ContractStore;
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const InterfaceContentComponent = ({ state }: Props) => {
  const classes = useStyles();
  const [openEvent, setOpenEvent] = React.useState(false);
  const handleClickEvent = () => {
    setOpenEvent(!openEvent);
  };

  const [openFunctions, setOpenFunctions] = React.useState(false);
  const handleClickFunctions = () => {
    setOpenFunctions(!openFunctions);
  };
  console.log('InterfaceContentComponent', { state });

  const events = useMemo(() => {
    if (state.interface) {
      return Object.entries(state.interface.events);
    }
    return [];
  }, [state.interface]);

  const functions = useMemo(() => {
    if (state.interface) {
      return Object.entries(state.interface.functions);
    }
    return [];
  }, [state.interface]);

  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Contract Interface
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClickEvent}>
        <ListItemIcon>
          <EventNote />
        </ListItemIcon>
        <ListItemText primary='Events' />
        {openEvent ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openEvent} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {events.map(([k, v]) => {
            return (
              <ListItem key={k} button className={classes.nested}>
                <ListItemText primary={k} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      <ListItem button onClick={handleClickFunctions}>
        <ListItemIcon>
          <FunctionsIcon />
        </ListItemIcon>
        <ListItemText primary='Functions' />
        {openFunctions ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openFunctions} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {functions.map(([k, v]) => {
            return (
              <ListItem key={k} button className={classes.nested}>
                <ListItemText primary={k} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export const InterfaceContent = observer(InterfaceContentComponent);
