import Herosection from "./home/herosection";

export default function Home() {
  return (
    <div className="grid gap-12">
      <Herosection />
      <section className="max-w-7xl w-full mx-auto md:p-4 p-2 grid gap-4">
        <h1 className="text-primary text-5xl font-bold text-center mb-5">
          Customer Use Cases
        </h1>
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 p-2 bg-accent rounded-sm">
          <div className="text-lg">
            <h1 className="text-2xl font-semibold">Heading</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            incidunt quasi velit nostrum provident. Dolore minima sed quae ipsam
            ab eveniet esse quis rerum eligendi minus! Quos fugiat deserunt
            repudiandae, id velit veniam facere, necessitatibus ipsa officia
            animi vitae, esse neque reprehenderit dolores. Assumenda distinctio
            voluptatem mollitia quis neque esse consectetur corporis facere
            commodi modi quos quidem alias debitis eos non dicta exercitationem,
            quaerat vero maiores sit eligendi sequi quo illum reiciendis!
            Aspernatur ratione at deleniti earum voluptatem ut? Deserunt earum
            quos in officia sequi aspernatur delectus vitae, perferendis minima
            magni rem tempora eveniet, esse perspiciatis tenetur quas itaque
            pariatur!
          </div>
          <div>
            <img
              src="/images/home.webp"
              alt="service image"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 p-2 bg-accent rounded-sm">
          <div>
            <img
              src="/images/home.webp"
              alt="service image"
              className="rounded-lg"
            />
          </div>
          <div className="text-lg">
            <h1 className="text-2xl font-semibold ">Heading</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            incidunt quasi velit nostrum provident. Dolore minima sed quae ipsam
            ab eveniet esse quis rerum eligendi minus! Quos fugiat deserunt
            repudiandae, id velit veniam facere, necessitatibus ipsa officia
            animi vitae, esse neque reprehenderit dolores. Assumenda distinctio
            voluptatem mollitia quis neque esse consectetur corporis facere
            commodi modi quos quidem alias debitis eos non dicta exercitationem,
            quaerat vero maiores sit eligendi sequi quo illum reiciendis!
            Aspernatur ratione at deleniti earum voluptatem ut? Deserunt earum
            quos in officia sequi aspernatur delectus vitae, perferendis minima
            magni rem tempora eveniet, esse perspiciatis tenetur quas itaque
            pariatur!
          </div>
        </div>
      </section>
    </div>
  );
}
