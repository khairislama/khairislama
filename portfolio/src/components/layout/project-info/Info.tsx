function InfoOneProject() {
  return (
    <div className="w-full mx-auto max-w-4xl grid grid-cols-3 gap-4 sm:gap-24 mt-10 font-syne">
      <div className="flex flex-col items-center justify-center text-center sm:text-lg">
        <h4 className="text-foreground font-semibold">Start date</h4>
        <p className="">6 September 2024</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center sm:text-lg">
        <h4 className="text-foreground font-semibold">Client</h4>
        <p className="">Hutchinson</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center sm:text-lg">
        <h4 className="text-foreground font-semibold">Role</h4>
        <p className="">Backend developer</p>
      </div>
    </div>
  );
}

export default InfoOneProject;
