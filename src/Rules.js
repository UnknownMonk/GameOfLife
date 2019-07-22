import React from 'react';

function Rules() {
  return (
    <div>
      <h1>Rules</h1>
      <p>
        Any live cell with fewer than two live neighbours dies, as if caused by
        underpopulation.
      </p>
      <p>
        Any live cell with two or three live neighbours lives on to the next
        generation.
      </p>
      <p>
        Any live cell with more than three live neighbours dies, as if by
        overpopulation.
      </p>
      <p>
        Any dead cell with exactly three live neighbours becomes a live cell, as
        if by reproduction.
      </p>
    </div>
  );
}
export default Rules;
