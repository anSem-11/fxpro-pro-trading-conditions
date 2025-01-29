import './pro-trading-conditions-world.scss';

import { Tx } from '@react-features/translation/tx.component';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';
import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import ProTradingConditionsWorldAnimation from './components/pro-trading-conditions-world-animation/pro-trading-conditions-world-animation.component';


const bem = buildBem('pro-trading-conditions-world');

export default function ProTradingConditionsWorld(): JSX.Element {
  const flags = [
    {
      src: 'https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/United-Kingdom-icon.svg',
      alt: 'UK Flag',
    },
    {
      src: 'https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/Europe-icon.svg',
      alt: 'EU Flag',
    },
    {
      src: 'https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/South-Africa-icon.svg',
      alt: 'South Africa Flag',
    },
    {
      src: 'https://direct-website.azureedge.net/assets/img/pages/pro-trading-conditions/Bahamas-icon.svg',
      alt: 'Bahamas Flag',
    },
  ];

  return (
    <section className={bem()}>

      <div className="container">
        <ProTradingConditionsWorldAnimation />
        <div className={bem('flags-wrapper')}>
          <h2 className={bem('title')}>
            <Tx>pro-trading-conditions-world-title</Tx>
          </h2>
          <ul className={bem('list')}>
            {flags.map(flag => (
              <li
                key={flag.alt}
                className={bem('item')}
              >
                <img
                  alt={flag.alt}
                  className={bem('flag')}
                  src={flag.src}
                />
              </li>
            ))}
          </ul>
          <UiDirectLink
            className={bem('button')}
            dataTestId="pro-trading-conditions-world-button"
            mode="register"
          >
            <UiButton size="l"><Tx>pro-trading-conditions-hero-btn</Tx></UiButton>
          </UiDirectLink>
        </div>
      </div>
    </section>
  );
}
