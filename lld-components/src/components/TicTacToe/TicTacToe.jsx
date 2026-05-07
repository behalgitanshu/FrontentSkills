import React from 'react'

const Cell = ({ value, onClick }) => {
  return (
    <div
      className="h-16 w-16 border border-black-300 p-4 text-2xl font-bold cursor-pointer"
      onClick={onClick}
    >
      {value}
    </div>
  )
}

const TicTacToe = () => {
  const [grid, setGrid] = React.useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  const [currentPlayer, setCurrentPlayer] = React.useState('X')
  const [isWin, setIsWin] = React.useState(null)

  const checkWin = (g) => {
    for (let i = 0; i < 3; i++) {
      if (g[i][0] && g[i][0] === g[i][1] && g[i][1] === g[i][2]) return g[i][0]
    }
    for (let j = 0; j < 3; j++) {
      if (g[0][j] && g[0][j] === g[1][j] && g[1][j] === g[2][j]) return g[0][j]
    }
    if (g[0][0] && g[0][0] === g[1][1] && g[1][1] === g[2][2]) return g[0][0]
    if (g[0][2] && g[0][2] === g[1][1] && g[1][1] === g[2][0]) return g[0][2]
    return null
  }

  const handleClick = (rowIdx, colIdx) => {
    if (isWin || grid[rowIdx][colIdx]) return
    const newGrid = grid.map((row, r) =>
      row.map((cell, c) =>
        r === rowIdx && c === colIdx ? currentPlayer : cell,
      ),
    )
    setGrid(newGrid)
    if (checkWin(newGrid)) {
      setIsWin(true)
    } else {
      setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'))
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
      <h2>Tic Tac Toe</h2>
      <h2>{`${isWin ? 'Winner: ' : 'Next Player: '}${currentPlayer}`}</h2>
      <div>
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="flex">
            {row.map((cell, colIdx) => (
              <Cell
                key={colIdx}
                value={cell}
                onClick={() => handleClick(rowIdx, colIdx)}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
        onClick={() => {
          setGrid([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ])
          setIsWin(null)
        }}
      >
        Reset Game
      </button>
    </div>
  )
}

export default TicTacToe
