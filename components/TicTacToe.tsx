'use client';
import { useState } from 'react';
export default function TicTacToe() {
 const [cells,setCells]=useState<(string|null)[]>(Array(9).fill(null));const [turn,setTurn]=useState('X');const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 const winner=lines.map(([a,b,c])=>cells[a]&&cells[a]===cells[b]&&cells[a]===cells[c]?cells[a]:null).find(Boolean);const draw=!winner&&cells.every(Boolean);
 function play(i:number){if(cells[i]||winner)return;const next=[...cells];next[i]=turn;setCells(next);setTurn(turn==='X'?'O':'X')}
 return <div className="game-wrap"><div className="game-board" role="grid" aria-label="Tic-tac-toe game">{cells.map((cell,i)=><button key={i} role="gridcell" aria-label={`Square ${i+1}${cell?`, ${cell}`:', empty'}`} onClick={()=>play(i)}>{cell}</button>)}</div><div className="game-status" aria-live="polite">{winner?`${winner} wins.`:draw?'A draw.':`${turn} to play.`}<button className="reset-game" onClick={()=>{setCells(Array(9).fill(null));setTurn('X')}}>Reset</button></div></div>;
}
