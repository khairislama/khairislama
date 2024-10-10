import Image from "next/image";

function GithubStats() {
  return (
    <section className="w-full mx-auto max-w-4xl my-10">
      <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider md:text-center">
        Formulation&apos;s stats
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-10">
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">Total star earned</p>
          <p className="font-syne font-bold text-3xl">72.6k</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">Total commits</p>
          <p className="font-syne font-bold text-3xl">86</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">Total PRs</p>
          <p className="font-syne font-bold text-3xl">14</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">Total issues</p>
          <p className="font-syne font-bold text-3xl">7</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">Total tests</p>
          <p className="font-syne font-bold text-3xl">64</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-xl gap-2">
          <p className="font-rubik">Technologies</p>
          <div className="w-full h-full flex items-center justify-center gap-4">
            <Image
              src="/icons/nextjs.png"
              alt="NextJS"
              width={300}
              height={300}
              className="w-8"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
            <Image
              src="/skills/tailwindcss.png"
              alt="Tailwind css"
              width={89}
              height={87}
              className="w-8"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GithubStats;
