function furthestDistanceFromOrigin(moves: string): number {
  /*
    *
    Input: moves = "_R__LL_"
Output: 5
Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves "LRLLLLL".

    */
  let max = 0;
  let current = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "L") {
      current--;
    } else if (moves[i] === "R") {
      current++;
    } else {
      current *= -1;
    }
    max = Math.max(max, Math.abs(current));
  }
  return max;
}

const out = furthestDistanceFromOrigin("L_RL__R");

console.log(out);
