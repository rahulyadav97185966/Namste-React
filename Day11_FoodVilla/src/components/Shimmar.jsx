const Shimmar = () => {
  return (
    <div className="Shimmar">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="RestroListShimmar"></div>
        ))}
    </div>
  );
};
export default Shimmar;
