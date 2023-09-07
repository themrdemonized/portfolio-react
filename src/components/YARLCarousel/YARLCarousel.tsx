import YARLImageSlide from "@/components/YARLImageSlide/YARLImageSlide"
import { Lightbox, Slide } from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Inline, Slideshow } from "yet-another-react-lightbox/plugins"
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './YARLCarousel.module.scss';

export interface YARLCarouselProps {
  slides: Slide[],
  startIndex?: number,
}

export default function YARLCarousel({startIndex=0, slides}: YARLCarouselProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(startIndex);
  const openRef = useRef<boolean>(false)

  const slideshowRef = useRef<any>(null)

  const toggleOpen = (state: boolean) => {
    setOpen(state)
    openRef.current = state
  }

  const updateIndex = ({ index: current }: { index: number }) => {
    setIndex(current);
  }
    
  return (
    <>
      <Lightbox
        styles={{
          container: {
            cursor: "pointer"
          },
          button: {
            display: "none"
          }
        }}
        index={index}
        slides={slides}
        plugins={[Inline, Slideshow]}
        on={{
          view: updateIndex,
          click: () => {
            toggleOpen(true);
            (openRef.current ? slideshowRef.current?.pause : slideshowRef.current?.play)?.();
          },
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            aspectRatio: "16 / 9",
            margin: "0 auto",
          },
        }}
        slideshow={{
          autoplay: true,
          delay: 3000,
          ref: slideshowRef
        }}
        render={
          {
            iconSlideshowPlay: () => <></>,
            iconSlideshowPause: () => <></>,
            iconNext: () => <></>,
            iconPrev: () => <></>,
          }
        }
      />
      <CSSTransition
        classNames={{
          appear: styles['my-appear'],
          appearActive: styles['my-active-appear'],
          appearDone: styles['my-done-appear'],
          enter: styles['my-enter'],
          enterActive: styles['my-active-enter'],
          enterDone: styles['my-done-enter'],
          exit: styles['my-exit'],
          exitActive: styles['my-active-exit'],
          exitDone: styles['my-done-exit'],
         }}
        in={open}
        timeout={200}
        unmountOnExit
      >
        <Lightbox
          open={open}
          close={() => {
            toggleOpen(false);
            (openRef.current ? slideshowRef.current?.pause : slideshowRef.current?.play)?.();
          }}
          index={index}
          slides={slides}
          on={
            {
              view: updateIndex,
            }
          }
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
          render={{slide: YARLImageSlide, thumbnail: YARLImageSlide}}
          plugins={[Thumbnails]}
        />
      </CSSTransition>
    </>
  );
}
