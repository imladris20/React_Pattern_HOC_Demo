import withLoader from "./HOC/withLoader";

const DigimonImages = (props) => {
  const data = props.data.content;
  return (
    <>
      <h1 className="mt-8 text-3xl font-bold">亞古獸</h1>
      <div className="m-3 flex w-full flex-wrap items-center justify-center">
        {data.map((digimon, index) => {
          return (
            <div
              key={index}
              className="m-4 flex w-56 flex-col items-center justify-center rounded border border-solid border-gray-400 p-2"
            >
              <img
                src={digimon.image}
                alt="dog"
                className="aspect-[4/3] w-52 object-contain"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const DigimonImagesWithLoader = withLoader(
  DigimonImages,
  "https://digi-api.com/api/v1/digimon?name=agumon",
);

export default DigimonImagesWithLoader;
