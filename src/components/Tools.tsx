export const Tools = ({ handleStates }: { handleStates: HandleStates }) => {
  return (
    <div className="tools">
      <button
        onClick={() => {
          handleStates("✏️");
          handleStates("black");
        }}
      >
        ✏️
      </button>
      <button
        onClick={() => {
          handleStates("🧽");
        }}
      >
        🧽
      </button>
      <button
        onClick={() => {
          handleStates("🗑️");
        }}
      >
        🗑️
      </button>
    </div>
  );
};
