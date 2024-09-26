import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Games = () => {
  let { game, player } = useSelector((store) => store.gameStore);
  let [gamename, setGame] = useState("");
  let [playerS, setPlayer] = useState("");

  let dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      Game:{game}
      <br />
      <input
        type="text"
        className="border-2"
        onChange={(e) => setGame(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_GAME", payload: gamename });
        }}
      >
        Update Game
      </button>
      <br />
      Player:{player}
      <br />
      <input
        type="text"
        className="border-2"
        onChange={(e) => setPlayer(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_PLAYER", payload: playerS });
        }}
      >
        Update Player
      </button>
    </div>
  );
};

export default Games;
