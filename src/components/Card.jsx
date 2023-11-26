export const Card = ({ item, className, textColor }) => {
  const { disease_name, emergency_nature, relevance, description, tags } = item;

  return (
    <div
      className={`${className} max-w-[364px] p-4 flex flex-col gap-y-2.5 rounded-lg`}
    >
      <h1 className={`text-xl font-semibold`} style={{ color: textColor }}>
        {disease_name}
      </h1>
      <p className="font-light">{description}</p>
      {tags.map((item) => {
        return (
          <div className="m-w-[250px] top-[110px] flex flex-wrap gap-x-2 gap-y-2">
            <span
              className="text-plusplus bg-plus text-base font-normal px-4 py-3 rounded-[40px] "
              key={item}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};
