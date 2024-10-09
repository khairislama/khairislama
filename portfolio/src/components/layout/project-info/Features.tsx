function FeaturesOneProject() {
  const list = ["Blender", "Freelance", "solo", "web design", "next.js"];
  return (
    <ul className="grid grid-cols-5 gap-10 mt-12 w-full relative">
      {list.map((item, i) => (
        <li
          className="py-2 px-4 h-10 w-32 bg-foreground/40 rounded-full text-center absolute left-[100%] repeat-infinite"
          key={i}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default FeaturesOneProject;
