import type { ProTradingConditionsHeroMediaSrc } from './pro-trading-conditions-video-animation.type';

export const getProTradingConditionsHeroMediaSrc = (componentIndex: number): ProTradingConditionsHeroMediaSrc => {
  return {
    videoSrcWebm: `https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/benefits/video-${componentIndex}.webm`,
    videoSrcWebmMobile: `https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/benefits/video-${componentIndex}-mobile-keyint3.webm`,
    videoSrcMp4: `https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/benefits/video-${componentIndex}.mp4`,
    videoSrcMp4Mobile: `https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/benefits/video-${componentIndex}-mobile-keyint3.mp4`,
  };
};
