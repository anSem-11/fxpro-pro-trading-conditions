import './pro-trading-conditions-benefits.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useRenderData } from '@react-root/hooks/use-render-data';
import { UiAnimateOnVisible } from '@react-ui/animation/ui-animate-visible.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import ProTradingConditionsPattern from '../../../pro-trading-conditions-pattern/pro-trading-conditions-pattern.component';
import ProTradingConditionsVideoAnimation from '../pro-trading-conditions-video-animation/pro-trading-conditions-video-animation.component';


const bem = buildBem('pro-trading-conditions-benefits');

type ProTradingConditionsBenefitsProps = {
  title: string;
  content: string;
  isDesktop: boolean;
  componentIndex: number;
  background?: string;
};

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const BLOCK_INDEXES_TO_SHOW_PATTERN = [ 3, 4, 5 ];

export default function ProTradingConditionsBenefits({
  title,
  content,
  background,
  isDesktop,
  componentIndex,
}: ProTradingConditionsBenefitsProps): JSX.Element {
  const { ssrData } = useRenderData();

  const years_of_operation = `${ssrData.staticVariables.years_of_operation}`;

  return (
    <div
      className={`${bem('description')} ${background === 'black' ? 'description-dark' : 'description-light'}`}
    >
      {BLOCK_INDEXES_TO_SHOW_PATTERN.includes(componentIndex) && (
        <ProTradingConditionsPattern
          componentId={`${bem()}-${componentIndex.toString()}`}
        />
      )}
      <UiAnimateOnVisible
        animationClassName="fade-in-animation"
        className="fade-in-animation"
      >
        <div className={bem('description-container')}>
          <h2 className={bem('title')}><Tx>{title}</Tx></h2>
          <p className={bem('content')}><Tx data={{ years_of_operation: `${years_of_operation}` }}>{content}</Tx></p>
        </div>
      </UiAnimateOnVisible>
      <ProTradingConditionsVideoAnimation
        componentIndex={componentIndex}
        isDesktop={isDesktop}
      />
    </div>
  );
}
