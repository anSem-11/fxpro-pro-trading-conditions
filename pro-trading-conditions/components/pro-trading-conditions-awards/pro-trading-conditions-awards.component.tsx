import './pro-trading-conditions-awards.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiAnimateOnVisible } from '@react-ui/animation/ui-animate-visible.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('pro-trading-conditions-awards');

export default function ProTradingConditionsAwards(): JSX.Element {
  const awardsData = [
    'pro-trading-conditions-awards-title-1',
    'pro-trading-conditions-awards-title-2',
    'pro-trading-conditions-awards-title-3',
    'pro-trading-conditions-awards-title-4',
  ];

  return (
    <section className={bem()}>
      <div className="container">
        <ul className={bem('list')}>
          {awardsData.map(title => (
            <li
              key={title}
              className={bem('item')}
            >
              <UiAnimateOnVisible
                animationClassName="grow-line"
                className="grow-line"
              >
                <span className={bem('marker')} />
              </UiAnimateOnVisible>
              <UiAnimateOnVisible
                animationClassName="fade-in-animation"
                className="fade-in-animation"
              >
                <h3 className={bem('title')}><Tx>{title}</Tx></h3>
              </UiAnimateOnVisible>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
