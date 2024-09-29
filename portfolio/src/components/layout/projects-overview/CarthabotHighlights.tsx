import Image from "next/image";

function CarthabotHighlights() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 w-full mt-4">
      <div className="flex items-center justify-start gap-1 xl:gap-4">
        <p className="underline underline-offset-4">Performance: </p>
        <p className="text-4xl text-green-500 font-bold">A</p>
      </div>
      <div className="flex items-center justify-start gap-1 xl:gap-4 col-span-2">
        <p className="underline underline-offset-4">Stack: </p>
        <div className="flex items-center gap-1 sm:gap-3 md:gap-1 xl:gap-3">
          <Image
            src="/skills/nextjs.png"
            alt="Next js"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/tailwindcss.png"
            alt="Tailwind css"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/nodejs.png"
            alt="Node js"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/typescript.png"
            alt="Typescript"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/figma.png"
            alt="Figma"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/git.png"
            alt="Git"
            width={20}
            height={20}
            className="w-8"
          />
          <Image
            src="/skills/firebase.png"
            alt="Firebase"
            width={20}
            height={20}
            className="w-8"
          />
        </div>
      </div>
    </div>
  );
}

export default CarthabotHighlights;
