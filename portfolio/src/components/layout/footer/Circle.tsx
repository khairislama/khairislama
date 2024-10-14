import Image from "next/image";

export const runtime = "edge";

function Circle() {
  return (
    <div className="w-48 h-auto flex items-center justify-center relative rounded-full border-2 border-foreground/70 border-dashed p-3">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-foreground tracking-wider"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          fill="none"
        />
        <text className="text-sm">
          <textPath
            xlinkHref="#circlePath"
            startOffset="50%"
            textAnchor="middle"
          >
            Khairi SLAMA ** Web Developer ***
          </textPath>
        </text>
      </svg>
      <div className="w-28 h-28 flex items-center justify-center rounded-full overflow-hidden border-foreground/70 border-2 border-dashed absolute left-[50%] translate-x-[-50%] top-[20%]">
        <Image
          src="/avatars/Avatar-7.png"
          alt="@khairislama"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Circle;
