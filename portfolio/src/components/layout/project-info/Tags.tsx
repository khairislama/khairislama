import Marquee from "react-fast-marquee";

function TagsOneProject() {
  const list = ["Blender", "Freelance", "solo", "web design", "next.js"];
  return (
    <ul className="w-full max-w-3xl mx-auto relative">
      <Marquee
        autoFill
        pauseOnHover
        direction="right"
        className="my-10"
        gradient
        gradientColor="#121120"
      >
        {list.map((item, i) => (
          <li
            className="py-1 px-4 bg-foreground/40 rounded-full mx-3 w-32 text-center text-foreground font-rubik"
            key={i}
          >
            {item}
          </li>
        ))}
      </Marquee>
    </ul>
  );
}

export default TagsOneProject;
