import './pro-trading-conditions-feedback-list.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useBrowserMount } from '@react-hooks/use-browser-mount';

import { createRef, useRef, useState } from 'react';

import { CSS_TABLET_WIDTH } from '@fx-project-shared/features/device/device.constant';
import { scriptLoader } from '@fx-project-shared/features/script-loader';
import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import ProTradingConditionsFeedback from './components/pro-trading-conditions-feedback.component';


const bem = buildBem('pro-trading-conditions-feedback');


export default function ProTradingConditionsFeedbackList(): JSX.Element {
  const feedbackCards = [
    {
      name: 'pro-trading-conditions-feedback-name-1',
      text: 'pro-trading-conditions-feedback-text-1',
    },
    {
      name: 'pro-trading-conditions-feedback-name-2',
      text: 'pro-trading-conditions-feedback-text-2',
    },
    {
      name: 'pro-trading-conditions-feedback-name-3',
      text: 'pro-trading-conditions-feedback-text-3',
    },
    {
      name: 'pro-trading-conditions-feedback-name-4',
      text: 'pro-trading-conditions-feedback-text-4',
    },
    {
      name: 'pro-trading-conditions-feedback-name-5',
      text: 'pro-trading-conditions-feedback-text-5',
    },
    {
      name: 'pro-trading-conditions-feedback-name-6',
      text: 'pro-trading-conditions-feedback-text-6',
    },
    {
      name: 'pro-trading-conditions-feedback-name-7',
      text: 'pro-trading-conditions-feedback-text-7',
    },
    {
      name: 'pro-trading-conditions-feedback-name-8',
      text: 'pro-trading-conditions-feedback-text-8',
    },
    {
      name: 'pro-trading-conditions-feedback-name-9',
      text: 'pro-trading-conditions-feedback-text-9',
    },
  ];


  const [ isDesktop, setIsDesktop ] = useState(false);
  const columnsRef = useRef([ null, null, null ].map(() => createRef<HTMLDivElement>()));
  const columnsNumber = 3;

  useBrowserMount(() => {
    setIsDesktop(window.innerWidth >= CSS_TABLET_WIDTH);
  });

  useBrowserMount(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= CSS_TABLET_WIDTH);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  useBrowserMount(() => {
    const section = document.querySelector('.pro-trading-conditions-feedback') as HTMLElement;

    const handleWheel = (e: WheelEvent) => {
      const MULTIPLIER = 0.1;
      const rect = section.getBoundingClientRect();
      const sectionCenterY = rect.top + (rect.height / 2);
      const windowCenterY = window.innerHeight / 2;
      const isInMiddle = Math.abs(sectionCenterY - windowCenterY) < window.innerHeight * MULTIPLIER;

      if (isInMiddle) {
        e.preventDefault();

        const scrollSpeed = 0.3;
        const delta = e.deltaY * scrollSpeed;

        let shouldScrollPage = true;

        columnsRef.current.forEach((ref, index) => {
          if (ref.current) {
            const startPos0 = 106;
            const startPos1 = 0;
            const startPos2 = 168;

            const endPos0 = -660;
            const endPos1 = -500;
            const endPos2 = -730;

            let currentPos
              = parseFloat(ref.current.style.transform.replace('translate3d(0px, ', '').replace('px, 0px)', ''))
              || (index === 0 ? startPos0 : index === 1 ? 0 : startPos2);
            let newPos = currentPos - delta;

            const startPositions = [ startPos0, startPos1, startPos2 ];
            const endPositions = [ endPos0, endPos1, endPos2 ];

            newPos = Math.min(Math.max(newPos, endPositions[index]), startPositions[index]);

            if (newPos !== endPositions[index] && newPos !== startPositions[index]) {
              shouldScrollPage = false;
            }

            ref.current.style.transform = `translate3d(0px, ${newPos}px, 0px)`;
          }
        });

        if (shouldScrollPage) {
          window.scrollBy(0, delta);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  });

  useBrowserMount(() => {
    scriptLoader().load('https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js');
  });

  return (
    <section className={bem()}>
      <div className="container">
        <div className={bem('wrapper')}>
          <div className={bem('gradient-top')} />
          <h4 className={bem('title')}><Tx>pro-trading-conditions-feedback-title</Tx></h4>
          {isDesktop
            ? (
              <div className={bem('columns')}>
                {[ 0, 1, 2 ].map(column => (
                  <div
                    key={column}
                    ref={columnsRef.current[column]}
                    className={bem('column')}
                  >
                    {feedbackCards
                      .filter((_, index) => index % columnsNumber === column)
                      .map(feedback => (
                        <ProTradingConditionsFeedback
                          key={feedback.name}
                          name={feedback.name}
                          text={feedback.text}
                        />
                      ))}
                  </div>
                ))}
              </div>
            )
            : (
              <swiper-container
                centered-slides="true"
                css-mode="true"
                loop="true"
                slides-per-view="auto"
                space-between="10"
                speed="500"
              >
                {feedbackCards.map((feedback, index) => (
                  <swiper-slide key={index}>
                    <ProTradingConditionsFeedback
                      name={feedback.name}
                      text={feedback.text}
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            )}
          <div className={bem('gradient-bottom')} />
        </div>
      </div>
    </section>
  );
}

