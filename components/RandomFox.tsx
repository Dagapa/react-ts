//generate a random function
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;
  console.log(image);

  return <img width={320} height="auto" src={image} />;
};
