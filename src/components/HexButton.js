const HexButton = ({ text, onClickAction }) => {
  return (
    <>
      <div className="hex-border">
        <button
          className="hex-inner text-black px-10 py-10 font-bold uppercase relative rounded"
          onClick={onClickAction}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default HexButton;
