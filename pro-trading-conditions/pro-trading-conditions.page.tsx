import './pro-trading-conditions.scss';

import { Main } from '@react-features/main/main.component';

import ProTradingConditionsAwards from './components/pro-trading-conditions-awards/pro-trading-conditions-awards.component';
import ProTradingConditionsBenefits from './components/pro-trading-conditions-benefits/pro-trading-conditions-benefits-list.component';
import ProTradingConditionsFeedbackList from './components/pro-trading-conditions-feedback/pro-trading-conditions-feedback-list.component';
import ProTradingConditionsHero from './components/pro-trading-conditions-hero/pro-trading-conditions-hero.component';
import ProTradingConditionsJoin from './components/pro-trading-conditions-join/pro-trading-conditions-join.component';
import ProTradingConditionsRegister from './components/pro-trading-conditions-register/pro-trading-conditions-register.component';
import ProTradingConditionsWorld from './components/pro-trading-conditions-world/pro-trading-conditions-world.component';


export default function ProTradingConditions(): JSX.Element {
  return (
    <Main>
      <div>
        <ProTradingConditionsHero />
      </div>
      <div>
        <ProTradingConditionsBenefits />
      </div>
      <div>
        <ProTradingConditionsJoin />
      </div>
      <div>
        <ProTradingConditionsAwards />
      </div>
      <div>
        <ProTradingConditionsWorld />
      </div>
      <div>
        <ProTradingConditionsFeedbackList />
      </div>
      <div>
        <ProTradingConditionsRegister />
      </div>
    </Main>
  );
}
