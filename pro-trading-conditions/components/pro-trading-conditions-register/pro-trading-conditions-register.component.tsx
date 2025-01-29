import './pro-trading-conditions-register.scss';

import { Tx } from '@react-features/translation/tx.component';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';
import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import ProTradingConditionsPattern from '../pro-trading-conditions-pattern/pro-trading-conditions-pattern.component';


const bem = buildBem('pro-trading-conditions-register');

export default function ProTradingConditionsRegister(): JSX.Element {
  return (
    <section className={bem()}>
      <ProTradingConditionsPattern
        componentId={`${bem()}`}
      />
      <div className="container">
        <h2 className={bem('title')}>
          <Tx>pro-trading-conditions-register-title</Tx>
        </h2>
        <p className={bem('description')}>
          <Tx>pro-trading-conditions-register-description</Tx>
        </p>
        <UiDirectLink
          className={bem('button')}
          dataTestId="pro-trading-conditions-register-button"
          mode="register"
        >
          <UiButton size="l"><Tx>pro-trading-conditions-hero-btn</Tx></UiButton>
        </UiDirectLink>
      </div>
    </section>
  );
}
