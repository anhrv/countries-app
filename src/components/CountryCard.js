const CountryCard = ({ title, flag, population, region, capital }) => {
  return (
    <div className="container rounded-lg shadow lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={flag}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-xs">
          Population:
          <span className="text-gray-700 dark:text-textgra"> {population}</span>
        </p>
        <p className="text-xs">
          Region:
          <span className="text-gray-700 dark:text-textgra"> {region}</span>
        </p>
        <p className="text-xs">
          Capital:
          <span className="text-gray-700 dark:text-textgra"> {capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
