import withLoader from "./HOC/withLoader";

const DogImages = (props) => {
  return (
    <div className="m-3 flex w-full flex-wrap items-center justify-center">
      {props.data.message.map((dog, index) => {
        return (
          <div
            key={index}
            className="m-4 flex w-56 flex-col items-center justify-center rounded border border-solid border-gray-400 p-2"
          >
            <img
              src={dog}
              alt="dog"
              className="aspect-[4/3] w-52 object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

const DogImagesWithLoader = withLoader(
  DogImages,
  "https://dog.ceo/api/breed/shiba/images/random/6",
);

export default DogImagesWithLoader;
