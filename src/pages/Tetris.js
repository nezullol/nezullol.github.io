import React, { useState } from 'react';
import '../App.css';
//Compnents
import Stage from './Components/Stage';
import Display from './Components/Display';
import Startbutton from './Components/Startbutton';

import { createStage } from '../gameHelpers';

//Styles Components
import { StyledTetris, StyledTetrisWrapper } from './Components/styles/StyledTetris';


//Custom Hooks

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


/* TODOS:

          MAKE A MOCK UP OF YOUR TETRIS SHAPES IN EXCEL
          USE EXCEL MOCK UP TO MAKE AN ARRARY OF NUMBERS THAT MAPS TO THE SQUARE SHAPE
          PUT EACH SHAPE CONFIGURATION IN AN ARRARY MAKING AN ARRAY OF ARRAYS
          THEN PUT THAT IN A FINAL ARRARY SO YOU CAN CALL A RANDOM SHAPE IN A RANDOM CONFIG

*/
const Tetris = () => {



    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);



      const grid = document.querySelector('.board');
      let square = Array.from(document.querySelectorAll('.board div'))
      const width = 10

      console.log('re-render');

      const movePlayer = (dir) => {
          updatePlayerPos({
            x: dir, y: 0

          })
      }

      const startGame = () => {
        //Reset game

        setStage(createStage());
        resetPlayer();


      }

      const drop = () => {
        updatePlayerPos({x : 0, y: 1, collided: false})
      }

      const dropPlayer = () => {
        drop();
      }

      const move = ({keyCode}) => {
          if (!gameOver) {
            if(keyCode === 37) {
              movePlayer(-1);
               } else if (keyCode === 39) {
                movePlayer(1);
               } else if (keyCode === 40) {
                dropPlayer();
               }



          }
      }
      
      return (
        <div className="Tetris">
        
        <div className="Tetris-app">
        
        {/*
        DONT EXPAND THE BOARD DIV ITS JUST 200 EMPTY DIVS
      */}
      
      
      <StyledTetrisWrapper role="button" tabIndex= "0" onKeyDown={e => move(e)}>
            <StyledTetris>

            <Stage stage={stage} />
            
            
            <aside>
            { gameOver ? (
              <Display gameOver={gameOver} text= "Game Over" />
            ):(

            <div className='right-column'>
            

              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            
            
            </div>
            ) }

          
            <Startbutton callback={startGame} />
            </aside>
            </StyledTetris>
            </StyledTetrisWrapper>
            
            </div>
            
            </div>
            )
          }

export default Tetris