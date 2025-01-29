import './pro-trading-conditions-join.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiAnimateOnVisible } from '@react-ui/animation/ui-animate-visible.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('pro-trading-conditions-join');

export default function ProTradingConditionsJoin(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <UiAnimateOnVisible
          animationClassName="fade-in-animation"
          className="fade-in-animation"
        >
          <div className={bem('wrapper')}>
            <p className={bem('description')}>
              <Tx>pro-trading-conditions-join-description-1</Tx>
            </p>
            <p className={bem('description')}>
              <Tx>pro-trading-conditions-join-description-2</Tx>
            </p>
          </div>
        </UiAnimateOnVisible>
      </div>
    </section>
  );
}
