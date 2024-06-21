const Overlay = ({ activeData, setOverlay }) => {
  return (
    <div
      onClick={() => {
        setOverlay(false);
      }}
      className="absolute top-0 left-0 h-screen w-full bg-zinc-900 bg-opacity-50 grid place-items-center p-10"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full max-w-[600px] bg-white rounded-lg p-10 my-5"
      >
        <h2 className="text-xl font-bold mb-5">
          More info about {activeData.title}:
        </h2>
        <p>{activeData.longDescription}</p>
      </div>
    </div>
  );
};
export default Overlay;
