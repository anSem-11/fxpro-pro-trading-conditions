import type { ResponsiveImageConfigData } from '@react-root/types/responsive-images-config.type';


// "sizes" is taken from pro-trading-conditions-world.scss
export const proTradingConditionsWorldImageSrc: ResponsiveImageConfigData = {
  src: 'https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/world/pro-trading-conditions-world@300w.webp',
  srcSet: `
    https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/world/pro-trading-conditions-world@300w.webp 300w,
    https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/world/pro-trading-conditions-world@800w.webp 800w,
    https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/world/pro-trading-conditions-world@1200w.webp 1200w,
    https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/world/pro-trading-conditions-world@1800w.webp 1800w,
  `,
  sizes: '770px',
};
