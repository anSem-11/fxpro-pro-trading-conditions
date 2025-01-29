import './pro-trading-conditions-hero.scss';

import { Tx } from '@react-features/translation/tx.component';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';
import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleSpacing } from '@fx-project-shared/features/style/style-spacing/style-spacing.util';
import { styleText } from '@fx-project-shared/features/style/style-text/style-text.util';

import ProTradingConditionsPattern from '../pro-trading-conditions-pattern/pro-trading-conditions-pattern.component';

import { ProTradingConditionsHeroAnimation } from './components/pro-trading-conditions-hero-animation.component';


const bem = buildBem('pro-trading-conditions-hero');

export default function ProTradingConditionsHero(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <p className={`
             ${styleText({
      size: 'l',
      fontWeight: '500',
      lineHeight: '130',
      align: 'center',
    })}
             ${styleSpacing({ mb: 'm' })}
             ${bem('description')}`
        }
        >
          <Tx>pro-trading-conditions-hero-description</Tx>
        </p>
        <h1 className={`
             ${styleText({
      size: '4xl',
      fontWeight: '600',
      lineHeight: '130',
      align: 'center',
    })}
             ${styleSpacing({ mb: 'xl' })}
             ${bem('title')}`
        }
        >
          <Tx>pro-trading-conditions-hero-title</Tx>
        </h1>
        <UiDirectLink
          className={bem('button')}
          dataTestId="pro-trading-conditions-hero-button"
          mode="register"
        >
          <UiButton size="l"><Tx>pro-trading-conditions-hero-btn</Tx></UiButton>
        </UiDirectLink>
        <div className={bem('animation-wrapper')}>
          <ProTradingConditionsHeroAnimation />
          <div className={bem('pattern')}>
            <ProTradingConditionsPattern componentId={bem()} />
          </div>
        </div>

      </div>
    </section>
  );
}
