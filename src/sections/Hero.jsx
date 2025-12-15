import Button from "../components/Button";
import { words, flags } from "../constants";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:sixe-12 md:side-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
              <p className="text-white-50 md:text-xl relative z-10 pointer-event-none">
                Hi, I’m Djembar from Indonesia
                <img
                  src={flags[0].imgPath}
                  alt={flags[0].text}
                  className="inline-block w-6 h-4 ml-2 align-middle object-cover rounded-sm"
                />
                , I build high-quality web and mobile applications focused on
                performance, scalability, and business impact.
              </p>
              
            </div>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work"/>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Hero;
