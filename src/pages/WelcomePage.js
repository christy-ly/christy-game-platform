import buzzThumbnail from "../media/buzz.png";

const WelcomePage = () => {
  return (
    <>
      <div id="Welcome Message" className="flex justify-center items-center">
        <img src={buzzThumbnail} alt="buzz..." />
      </div>
    </>
  );
};

export default WelcomePage;
