import Cell from "./components/Cell";
const Playground = ({ currentPlayer, setGame }) => {
  return (
    
    <div id="grid">
      {Array(9)
        .fill(0)
        .map((_, index) => {
          return (
            <Cell
              key={index}
              index={index}
              setGame={setGame}
              currentPlayer={currentPlayer}
            />
          );
        })}
    </div>
  );
};

export default Playground;
