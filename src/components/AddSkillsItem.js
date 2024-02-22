function TechnologyItem() {
  const moreTech = ["Git1", "Git1", "Git1", "Git1", "Git1", "Git1", "Git1"];
  return (
    <>
      {moreTech.map((item, index) => (
        <div key={index} className="relative mx-16">
          <p className="font-semibold text-3xl before:block before:h-4 before:w-4 before:bg-gradient-to-br before:from-blue-400 before:to-sky-300 before:rounded-full before:align-middle before:absolute before:-left-7 before:top-2">
            {item}
          </p>
        </div>
      ))}
    </>
  );
}

export default TechnologyItem;
