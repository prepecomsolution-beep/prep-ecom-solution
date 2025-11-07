function Herosection() {
  return (
    <section
      className="relative h-fit py-40 w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/terms-and-policies.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute size-full bg-linear-to-t from-black/70 to-black/99 z-10"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 px-4 grid gap-4 text-white max-w-4xl w-full text-center wrap-break-word">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-primary">
          Terms and Policies
        </h1>
        <h2 className="lg:text-2xl md:text-xl max-md:w-[90%] mx-auto">
          Prep Ecom Solution is your premier 3PL fulfillment and logistics
          management partner, delivering top-tier omnichannel operations to your
          customers. Reach 95% of the U.S. with cost-effective dynamic shipping
          solutions.
        </h2>
      </div>
    </section>
  );
}

export default Herosection;
