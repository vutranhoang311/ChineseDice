const initialState = {
  playerChoose: 0,
  played: 0,
  score: 0,
  dices: [],
};
const ChineseDiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER_CHOOSE": {
      const playerChoose = action.choose;
      return { ...state, playerChoose };
    }
    case "ROLL_DICES":
      let dices = [];
      for (let i = 0; i < 3; i++) {
        dices.push(Math.floor(Math.random() * 6 + 1));
      }

      const totalDice = dices.reduce((total, item) => {
        return (total += item);
      }, 0);

      if (state.playerChoose === 0) {
        return { ...state, dices };
      } else if (state.playerChoose === 1) {
        if (totalDice > 10) {
          const played = (state.played += 1);
          return {
            ...state,
            played,
            dices,
          };
        } else if (totalDice <= 10) {
          const score = (state.score += 1);
          const played = (state.played += 1);
          return {
            ...state,
            score,
            played,
            dices,
          };
        }
      } else if (state.playerChoose === 2) {
        if (totalDice > 10) {
          const score = (state.score += 1);
          const played = (state.played += 1);
          return {
            ...state,
            score,
            played,
            dices,
          };
        } else if (totalDice <= 10) {
          const played = (state.played += 1);
          return {
            ...state,
            played,
            dices,
          };
        }
      }
    default:
      return state;
  }
};
export default ChineseDiceReducer;
