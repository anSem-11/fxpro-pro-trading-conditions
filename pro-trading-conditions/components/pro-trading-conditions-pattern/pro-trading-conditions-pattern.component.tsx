import './pro-trading-conditions-pattern.scss';

import LottieAnimation from '@react-ui/lottie-animation/lottie-animation.component';
import type { LottieAnimationInstance } from '@react-ui/lottie-animation/lottie-animation.type';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { animationPatternData } from './pro-trading-conditions-pattern.constant';


const bem = buildBem('pro-trading-conditions-pattern');

interface Props {
  componentId: string;
}

export default function ProTradingConditionsPattern({ componentId }: Props): JSX.Element {
  const timeoutMs = 2400;

  function setPatternAnimationParams() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lottie = (window as any).bodymovin;
    const animationStartFrame = 0;
    const animationMiddleFrame = 40;
    const animationEndFrame = 149;

    const params = {
      container: document.getElementById(`lottie-animation-${componentId}`),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationPatternData,
    };

    let anim: LottieAnimationInstance;

    anim = lottie.loadAnimation(params);
    anim.playSegments([ [ animationStartFrame, animationMiddleFrame ] ], true);
    anim.playSegments([ [ animationMiddleFrame, animationEndFrame ] ], false);
    anim.loop = true;

    return anim;
  }

  return (
    <LottieAnimation
      className={bem()}
      componentId={componentId}
      setAnimationParams={setPatternAnimationParams}
      timeoutMs={timeoutMs}
    />
  );
}
