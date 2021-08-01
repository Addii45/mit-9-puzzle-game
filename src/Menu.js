import React, { Component } from 'react';
import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AlarmIcon from '@material-ui/icons/Alarm';
import Moves from '@material-ui/icons/CompareArrows';
import Replay from '@material-ui/icons/Replay';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const StyledToolbar = styled(Toolbar)`

@media (max-width: 1190px) {
  
  & {
    justify-content: center !important;
  }

  .toolbarTitle {
    display: none;
  }

}

@media (max-width: 890px) {

  .menuButton {
    margin: 10px 5px !important;
    min-width: 36px !important;
  }

  .menuIcon {
    margin-left: 0px !important;
  }

  .menuIcon+span {
    display: none !important;
  }

}

`;

class Menu extends Component {
  render() {
    const {
      seconds,
      moves,
      onResetClick,
    } = this.props;

    return (
      <StyledToolbar className="toolbar">

        <Button className="menuButton" variant="contained" onClick={onResetClick}>
            Reset game
            <Replay className="menuIcon" />
        </Button>
          <Button className>
            <AlarmIcon />
            <MediaQuery query="(min-width: 772px)" component="span">
            Time Elapsed:{' '}
            </MediaQuery>
            {seconds}s
          </Button>
          <Button>
            <Moves />
            <MediaQuery query="(min-width: 772px)" component="span">
              Moves Counter:{' '}
            </MediaQuery>
            {moves}
          </Button>
      </StyledToolbar>
    );
  }
}

Menu.propTypes = {
  seconds: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  onResetClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onNewClick: PropTypes.func.isRequired,
  gameState: PropTypes.symbol.isRequired,
};

export default Menu;
