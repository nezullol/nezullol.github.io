import { useState, useCallback} from 'react'

import{ TETROMINOS, randomTetrominos } from '../tetrominos'
import { STAGE_WIDTH, checkCollision } from '../gameHelper';

export const usePlayer = () =>{
    const [player, setPlayer] = useState({
        pos: { x:0, y:0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({x, y, collided}) =>{
        setPlayer(prev => ({
            ...prev,
            pos:{ x: (prev.pos.x += x), y:(prev.pos.y +=y)},
            collided,
        }))
    }

    const rotate = (matrix, direction) =>{
        const rotateTetro = matrix.map((_, index) =>
        matrix.map(col => col[index]),
        );
        if(direction > 0) return rotateTetro.map(row => row.reverse());

        return rotateTetro.rever();
    }

    const playerRotate = (stage, direction) =>{
        const clonePlayer = JSON.parse(JSON.stringify(player));
        clonePlayer.tetromino = rotate(clonePlayer.tetromino, direction);

        const pos = clonePlayer.pos.x;
        let offset = 1;

        while (checkCollision(clonePlayer, stage, {x: 0, y: 0})) {
            clonePlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));

            if (offset > clonePlayer.tetromino[0].length) {
                rotate(clonePlayer.tetromino, - direction);
                clonePlayer.tetromino.pos.x = pos;
                return;
            }           
        }

        setPlayer(clonePlayer);
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos:{x:STAGE_WIDTH / 2 - 2, y: 0},
            tetromino:randomTetrominos().shape,
            collided: false,
        })
    },[])

    return [player, updatePlayerPos, resetPlayer, playerRotate];
}