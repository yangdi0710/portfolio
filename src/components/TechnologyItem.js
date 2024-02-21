function TechnologyItem() {
  const tech = [
    {
      name: "HTML",
      rate: 90,
    },
    {
      name: "CSS",
      rate: 80,
    },
    {
      name: "JavaScript",
      rate: 60,
    },
    {
      name: "ReactJS",
      rate: 20,
    },
  ];
  return (
    <>
      {tech.map((item, index) => (
        <div key={index}>
          <h2 className="text-4xl font-bold mt-8">{item.name}</h2>
          <div className="flex items-baseline">
            <span
              className="block h-2 bg-gradient-to-r from-blue-400 to-sky-300 rounded-lg mt-2"
              style={{ width: item.rate + "%" }}
            ></span>
            <p className="ml-3">{item.rate}%</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TechnologyItem;
