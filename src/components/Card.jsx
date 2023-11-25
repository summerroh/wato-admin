export const Card = ({ item }) => {
  const { disease_name, emergency_nature, relevance } = item;
  return (
    <div>
      <h1>{disease_name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};
