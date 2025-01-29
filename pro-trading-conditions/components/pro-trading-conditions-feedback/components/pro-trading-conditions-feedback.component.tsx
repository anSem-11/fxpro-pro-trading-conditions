import './pro-trading-conditions-feedback.scss';

import { Tx } from '@react-features/translation/tx.component';
import FiveStarsRaiting from '@react-ui/icons/ui-five-stars-raiting.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('pro-trading-conditions-feedback');

type FeedbackCardsProps = {
  name: string;
  text: string;
};

export default function ProTradingConditionsFeedback({ name, text }: FeedbackCardsProps): JSX.Element {
  return (
    <div className={bem('card')}>
      <FiveStarsRaiting className={bem('icon')} />
      <p className={bem('name')}>
        <Tx>{name}</Tx>
      </p>
      <p className={bem('text')}>
        <Tx>{text}</Tx>
      </p>
    </div>
  );
}
