import './pro-trading-conditions-video-animation.scss';

import { useComponentVisible } from '@react-hooks/use-component-visible';
import UiVideoScrollAnimation from '@react-ui/ui-video-scroll-animation/ui-video-scroll-animation.component';

import { useEffect, useRef, useState } from 'react';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { getProTradingConditionsHeroMediaSrc } from './pro-trading-conditions-video-animation.constant';


const bem = buildBem('pro-trading-conditions-video-animation');

type ProTradingConditionsVideoAnimationProps = {
  isDesktop: boolean;
  componentIndex: number;
};

export default function ProTradingConditionsVideoAnimation({
  isDesktop,
  componentIndex,
}: ProTradingConditionsVideoAnimationProps): JSX.Element {
  /** Ref */
  const videoAnimationRef = useRef<HTMLDivElement | null>(null);
  const [ element, setElement ] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setElement(videoAnimationRef.current);
  }, []);

  /** Constant */
  const proTradingConditionsHeroMediaSrc = getProTradingConditionsHeroMediaSrc(componentIndex);

  /** State */
  const isVideoElementVisible = useComponentVisible({ element });

  return (
    <div ref={videoAnimationRef}>
      <UiVideoScrollAnimation
        videoClassName={bem([
          `${componentIndex ? componentIndex.toString() : ''}`,
          `${isVideoElementVisible ? 'animating' : ''}`,
        ])}
        videoSrcMp4={isDesktop
          ? proTradingConditionsHeroMediaSrc.videoSrcMp4
          : proTradingConditionsHeroMediaSrc.videoSrcMp4Mobile}
        videoSrcWebm={isDesktop
          ? proTradingConditionsHeroMediaSrc.videoSrcWebm
          : proTradingConditionsHeroMediaSrc.videoSrcWebmMobile}
        isDesktop={isDesktop}
        videoWrapperClassName={bem('video-wrapper', [ `${componentIndex ? componentIndex.toString() : ''}` ])}
      />
    </div>
  );
}
