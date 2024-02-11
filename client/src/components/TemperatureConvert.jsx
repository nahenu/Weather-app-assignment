const TemperatureConvert = ({ handleTemperature }) => {
  return (
    <div className="flex gap-4 mt-4 text-black font-semibold">
      {["celsius", "fahernheit"].map((temp) => {
        return (
          <button
            onClick={() => handleTemperature(temp)}
            className="bg-slate-400 py-1 px-4"
          >
            {temp}
          </button>
        );
      })}
    </div>
  );
};

export default TemperatureConvert;
