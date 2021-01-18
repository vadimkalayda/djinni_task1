import React, { useState, useEffect } from 'react';
import { Main, MainContainer, MainLeftPart, MainNotificationsBlock, MainTitle, MainNotificationsBlockButton, MainRightPart, MainRightPartBlock,
  MainRightPartTitle, MainRightPartParagraph, MainRightPartScoreNumber, MainRightPartLine, MainRightPartViewsNumber, MainRightPartEarningsNumber } from "./elements";

const MainComponent = ( ) => {
  const numberOfScores = Math.floor(Math.random() * 100) * 10;
  const numberOfViews = Math.floor(Math.random() * 10000);
  const [ totalEarnings, setTotalEarnings ] = useState();
  const [ earningsForDays, setEarningsForDays ] = useState(0);

  const helpCenter = () => {
    window.alert('I am sorry, but we do not have enough money to develop bot helper:)');
  };

  const getEarningsForMonth = () => {
    // get earnings for month
    let maxNumberOfMoneyForDay = 283.24;
    let amountOfDays = new Date().getDate();
    let sumOfMoney = 0;
    for(let i = 0; i < amountOfDays; i++) {
      sumOfMoney += Math.random() * maxNumberOfMoneyForDay;
    }

    setEarningsForDays(sumOfMoney.toFixed(2));
  };

  useEffect(getEarningsForMonth, []);

  const getFullAmountOfEarnings = () => {
    let actionWithEarnings = Math.floor(Math.random() * 2);
    let fullAmountOfMoney = 0;
    if(actionWithEarnings === 0) {
      fullAmountOfMoney = (earningsForDays / 2).toFixed(2);
      setTotalEarnings(fullAmountOfMoney);
    } else {
      fullAmountOfMoney = (earningsForDays / 2).toFixed(2);
      setTotalEarnings(fullAmountOfMoney);
    }
  };

  useEffect(getFullAmountOfEarnings, [earningsForDays]);

  return(
    <Main>
      <MainContainer>

        <MainLeftPart>
          <MainNotificationsBlock>
            <MainTitle>Latest notifications</MainTitle>
            <MainNotificationsBlockButton onClick={ helpCenter }>
              <i className="fa fa-question-circle" aria-hidden="true"></i>
            </MainNotificationsBlockButton>
          </MainNotificationsBlock>
        </MainLeftPart>

        <MainRightPart>

          <MainRightPartBlock>
            <MainRightPartTitle>Status</MainRightPartTitle>
            <MainRightPartParagraph>Your score</MainRightPartParagraph>
            <MainRightPartScoreNumber>{ numberOfScores }</MainRightPartScoreNumber>
            <MainRightPartLine></MainRightPartLine>
            <MainRightPartParagraph>Profile views this week:</MainRightPartParagraph>
            <MainRightPartViewsNumber>{ numberOfViews }</MainRightPartViewsNumber>
          </MainRightPartBlock>

          <MainRightPartBlock>
            <MainRightPartTitle>Earnings</MainRightPartTitle>
            <MainRightPartParagraph>Total</MainRightPartParagraph>
            <MainRightPartEarningsNumber>{ totalEarnings }&euro;</MainRightPartEarningsNumber>
            <MainRightPartLine></MainRightPartLine>
            <MainRightPartParagraph>Your earnings on { new Date().toLocaleString('default', { month: 'long' }) }</MainRightPartParagraph>
            <MainRightPartEarningsNumber>{ earningsForDays }&euro;</MainRightPartEarningsNumber>
          </MainRightPartBlock>
        </MainRightPart>
      </MainContainer>
    </Main>
  );
};

export default MainComponent;