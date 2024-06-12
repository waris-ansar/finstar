import PageHeroBg from "../public/assets/page-hero.jpg";

function PageHero({title}) {
  return (
    <>
      <section
        id="page-hero-section"
        className="relative text-white"
        style={{
          backgroundImage: `url(${PageHeroBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute w-full h-full bg-[#35861C] opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="container pt-[135px] lg:pt-[90px] h-[250px]">
            <h1 className="text-[40px] font-bold max-container">
              {title}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageHero;
