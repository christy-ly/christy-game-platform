const HexButton = ({ text, onClickAction }) => {
  return (
    <>
      <div className="hex-border">
        <button
          className="hex-inner text-black px-6 py-6 font-bold uppercase relative rounded"
          onClick={onClickAction}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default HexButton;
