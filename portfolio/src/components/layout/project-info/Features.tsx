import Marquee from "react-fast-marquee";

function FeaturesOneProject() {
  const list = [
    "Issue discussions",
    "Markdown support",
    "Comment reactions",
    "Social interactions",
    "User reputation system",
    "Reference other bugs",
    "@ Mentions users",
    "Notifications",
    "Bug labels",
  ];

  return (
    <ul className="relative">
      <Marquee
        autoFill
        pauseOnHover
        direction="left"
        className="my-4 md:my-10"
        gradient
        gradientColor="#121120"
      >
        {list.map((item, i) => (
          <li
            className="py-1 px-4 bg-foreground/40 rounded-full mx-3 text-center text-foreground font-rubik"
            key={i}
          >
            {item}
          </li>
        ))}
      </Marquee>
    </ul>
  );
}

export default FeaturesOneProject;
