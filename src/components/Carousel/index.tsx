import styles from "./Carousel.module.css";

import {
  useState,
  useEffect,
  useRef,
  Children,
  type TouchEvent,
  type ReactNode,
} from "react";

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [hideButtons, setHideButtons] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalItems = Children.count(children);
  const itemsArray = Children.toArray(children);

  const carouselContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage = 3;
      if (window.innerWidth < 1200) newItemsPerPage = 2;
      if (window.innerWidth < 750) newItemsPerPage = 1;

      setItemsPerPage(newItemsPerPage);
      setHideButtons(window.innerWidth < 1200);
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setCurrentIndex]);

  useEffect(() => {
    if (!carouselContentRef.current) return;

    const carousel = carouselContentRef.current;


    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex, setCurrentIndex]);

  useEffect(() => {
    if(totalSlides == 1) {
      setHideButtons(true);
    }
  }, [])

  const totalSlides = (totalItems % itemsPerPage > 0) ? Math.ceil(totalItems / itemsPerPage) : (totalItems / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!carouselContentRef.current) return;
    carouselContentRef.current.style.transition = "none";
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselContentRef.current) return;

    const currentTouchX = e.touches[0].clientX;
    const diff = touchStartX - currentTouchX;

    const baseTransform = -currentIndex * 100; 
    const dragTransform = (diff / carouselContentRef.current.clientWidth) * 100;

    carouselContentRef.current.style.transform = `translateX(${
      baseTransform - dragTransform
    }%)`;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselContentRef.current) return;

    carouselContentRef.current.style.transition = "transform 0.5s ease-in-out";
    setIsDragging(false);

    const endTouchX = e.changedTouches[0].clientX;
    const diff = touchStartX - endTouchX;
    const threshold = 50;

    if (diff > threshold) {
      goToNext();
    } else if (diff < -threshold) {
      goToPrevious();
    } else {
      carouselContentRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }

    setTouchStartX(0);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {!hideButtons && (
          <button
            onClick={goToPrevious}
            className={styles.carouselButton}
            disabled={totalSlides <= 1}
          >
            &#8249;
          </button>
        )}

        <div className={styles.carouselContentWrapper}>
          <div
            ref={carouselContentRef}
            className={styles.carouselContent}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            { Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideStart = slideIndex * itemsPerPage;
                const slideEnd = Math.min(
                  slideStart + itemsPerPage,
                  totalItems
                );
                const slideItems = itemsArray.slice(slideStart, slideEnd);

                return (
                  <div key={slideIndex} className={styles.carouselSlide}>
                    {slideItems.map((item, index) => (
                      <div key={index} className={styles.carouselChildWrapper}>
                        {item}
                      </div>
                    ))}
                  </div>
                );
              })
            }

          </div>
        </div>

        {!hideButtons && (
          <button
            onClick={goToNext}
            className={styles.carouselButton}
            disabled={totalSlides <= 1}
          >
            &#8250;
          </button>
        )}
      </div>

      {window.innerWidth < 1200 && (
        <div className={styles.carouselPagination}>
          Página {currentIndex + 1} de {totalSlides}
        </div>
      )}

    </div>
  );
}

export { Carousel };
