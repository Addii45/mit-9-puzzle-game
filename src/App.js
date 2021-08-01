import './App.css';
import React, { Component } from 'react';
import Game from './Game';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class App extends Component {
  
  constructor(props) {
    super(props);

    const level =  {tileSet: [1,2,3,4,5,6,8,7,9]};
    const originalLevel = Object.assign({}, level);

    this.state = {
      original: originalLevel,
      level,
    };
  }

  onResetClick = () => {
    this.setState({
      level: {
        tileSet: this.state.original.tileSet,
      },
    });
  };

  onNewClick = () => {
    const newLevel = {tileSet: [1,2,3,4,5,6,8,7]};
    const newOriginalLevel = Object.assign({}, newLevel);
    this.setState({
      level: newLevel,
      original: newOriginalLevel,
    });
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Game
          gridSize={3}
          tileSize={90}
          numbers={this.state.level.tileSet}
          onResetClick={this.onResetClick}
          onNewClick={this.onNewClick}
          original={this.state.original.tileSet}
        />
       
      </div>
    );
  }
}

App.propTypes = {
  level: PropTypes.shape({
    tileSet: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default styled(App)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;




