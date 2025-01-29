import './pro-trading-conditions-world-animation.scss';

import LottieAnimation from '@react-ui/lottie-animation/lottie-animation.component';
import type { LottieAnimationInstance } from '@react-ui/lottie-animation/lottie-animation.type';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { animationWorldData } from './pro-trading-conditions-world-animation.constant';


const bem = buildBem('pro-trading-conditions-world-animation');


function setWorldAnimationParams() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottie = (window as any).bodymovin;
  const animationContainer = document.getElementById(`lottie-animation-${bem()}`);

  const params = {
    container: animationContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: animationWorldData,
  };

  let anim: LottieAnimationInstance;

  anim = lottie.loadAnimation(params);
  anim.play();

  const animated = animationContainer.getElementsByTagName('svg')[0] as unknown as HTMLDivElement;

  animated.style.width = '1070px';
  animated.style.height = 'auto';
  animated.style.transform = 'translateX(-50%)';

  return anim;
}

export default function ProTradingConditionsWorldAnimation(): JSX.Element {
  return (
    <LottieAnimation
      className={bem()}
      componentId={bem()}
      setAnimationParams={setWorldAnimationParams}
    />
  );
}
