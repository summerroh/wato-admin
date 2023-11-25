export const Card = ({ item, className }) => {
  const { disease_name, emergency_nature, relevance, description } = item;
  return (
    <div
      className={`${className} max-w-[364px] p-4 flex flex-col gap-y-2.5 rounded-lg`}
    >
      <h1 className="text-blueplus text-xl font-semibold">{disease_name}</h1>
      <p>{description}</p>
    </div>
  );
};
