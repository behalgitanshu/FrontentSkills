import React from 'react'

const INITIAL_GRID = () => [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const checkWinner = (grid) => {
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2])
      return grid[i][0]
    if (grid[0][i] && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i])
      return grid[0][i]
  }
  if (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2])
    return grid[0][0]
  if (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])
    return grid[0][2]
  return null
}

const isDraw = (grid) => grid.every((row) => row.every((cell) => cell !== ''))

const Cell = ({ value, onClick, disabled }) => (
  <div
    className={`h-16 w-16 border border-gray-400 flex items-center justify-center text-2xl font-bold
      ${!disabled && !value ? 'cursor-pointer hover:bg-gray-100' : 'cursor-default'}
      ${value === 'X' ? 'text-blue-600' : 'text-red-500'}`}
    onClick={!disabled && !value ? onClick : undefined}
  >
    {value}
  </div>
)

const TicTacToe = () => {
  const [grid, setGrid] = React.useState(INITIAL_GRID)
  const [currentPlayer, setCurrentPlayer] = React.useState('X')
  const [winner, setWinner] = React.useState(null)
  const [draw, setDraw] = React.useState(false)

  const handleCellClick = (rowIdx, colIdx) => {
    const newGrid = grid.map((row, r) =>
      row.map((cell, c) =>
        r === rowIdx && c === colIdx ? currentPlayer : cell,
      ),
    )
    setGrid(newGrid)

    const w = checkWinner(newGrid)
    if (w) {
      setWinner(w)
    } else if (isDraw(newGrid)) {
      setDraw(true)
    } else {
      setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'))
    }
  }

  const handleReset = () => {
    setGrid(INITIAL_GRID)
    setCurrentPlayer('X')
    setWinner(null)
    setDraw(false)
  }

  const statusMessage = winner
    ? `Winner: ${winner}`
    : draw
      ? "It's a Draw!"
      : `Next Player: ${currentPlayer}`

  const isGameOver = Boolean(winner || draw)

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
      <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
      <p className="text-lg font-medium">{statusMessage}</p>
      <div className="border border-gray-400">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="flex">
            {row.map((cell, colIdx) => (
              <Cell
                key={colIdx}
                value={cell}
                onClick={() => handleCellClick(rowIdx, colIdx)}
                disabled={isGameOver}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
        onClick={handleReset}
      >
        Reset Game
      </button>
    </div>
  )
}

export default TicTacToe
