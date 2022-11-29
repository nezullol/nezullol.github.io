import { useEffect, useState, useCallback} from 'react'

export const useGameStatus = rowsCleared =>{
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() =>{
        if (rowsCleared > 0) {
            setScore(prev => prev + linePoints[ rowsCleared - 1] * (level + 1))
            setRows( prev => prev + rowsCleared);
        }
    },[level, linePoints, rowsCleared]) //Component will be updated only when one of the states change, otherwise it woul enter ina a infinit loop

    useEffect(() => {
        calcScore();
    },[calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel];
}