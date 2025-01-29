import { useIsDesktop } from '@react-hooks/use-is-desktop';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import ProTradingConditionsBenefits from './components/pro-trading-conditions-benefits/pro-trading-conditions-benefits.component';


const bem = buildBem('pro-trading-conditions-benefits');

export default function ProTradingConditionsBenefitsList(): JSX.Element {
  const blocks: Blocks = [
    {
      title: 'pro-trading-conditions-benefits-title-1',
      content: 'pro-trading-conditions-benefits-content-1',
      background: 'black',
      componentIndex: 1,
    },
    {
      title: 'pro-trading-conditions-benefits-title-2',
      content: 'pro-trading-conditions-benefits-content-2',
      background: 'light',
      componentIndex: 2,
    },
    {
      title: 'pro-trading-conditions-benefits-title-3',
      content: 'pro-trading-conditions-benefits-content-3',
      background: 'black',
      componentIndex: 3,
    },
    {
      title: 'pro-trading-conditions-benefits-title-4',
      content: 'pro-trading-conditions-benefits-content-4',
      background: 'light',
      componentIndex: 4,
    },
    {
      title: 'pro-trading-conditions-benefits-title-5',
      content: 'pro-trading-conditions-benefits-content-5',
      background: 'black',
      componentIndex: 5,
    },
    {
      title: 'pro-trading-conditions-benefits-title-6',
      content: 'pro-trading-conditions-benefits-content-6',
      background: 'light',
      componentIndex: 6,
    },
  ];

  const isDesktop = useIsDesktop();

  return (
    <section className={bem()}>
      {blocks.map(block => (
        <ProTradingConditionsBenefits
          key={block.title}
          background={block.background}
          componentIndex={block.componentIndex}
          content={block.content}
          isDesktop={isDesktop}
          title={block.title}
        />
      ))}
    </section>
  );
}

type Blocks = {
  title: string;
  content: string;
  background: string;
  componentIndex?: number;
}[];
