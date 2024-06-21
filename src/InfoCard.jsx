const InfoCard = ({ data, setActiveData, setOverlay }) => {
  return (
    <li className="w-full max-w-[500px] bg-white rounded-lg p-10 my-5">
      <h2 className="text-xl font-bold mb-5">{data.title}</h2>
      <p>{data.shortDescription}</p>
      <button
        onClick={() => {
          setOverlay(true);
          setActiveData(data);
        }}
        className="rounded-full bg-zinc-700 text-white py-2 px-5 mt-5 hover:bg-zinc-900 duration-200"
      >
        Learn more
      </button>
    </li>
  );
};
export default InfoCard;
