import { useState, useEffect, useCallback } from "react";
import CarouselImage from "../../assets/SlideImage";

const slidesData = CarouselImage.map((imgUrl, index) => ({
  id: index + 1,
  imgUrl: imgUrl
}));

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(
    () => setCurrentIndex(prev => (prev + 1) % slidesData.length),
    []
  );
  const prev = () =>
    setCurrentIndex(prev => (prev - 1 + slidesData.length) % slidesData.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex flex-col justify-center items-center px-2 md:px-5 mb-2">
      <div className="relative w-full md:w-[80vw] lg:w-[70vw] h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-xl overflow-hidden shadow-lg">

        {/* Slides */}
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.imgUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-sm md:btn-md bg-black/30 border-0 text-white hover:bg-black/55 backdrop-blur-sm"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-sm md:btn-md bg-black/30 border-0 text-white hover:bg-black/55 backdrop-blur-sm"
        >
          ❯
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6 h-3"
                  : "bg-white/50 w-3 h-3 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-3 right-4 z-20 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          {currentIndex + 1} / {slidesData.length}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
