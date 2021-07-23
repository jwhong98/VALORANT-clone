import React from 'react'
import { NewsContainer, NewsWrapper, NewsH1, NewsCard, NewsImg, NewsP, NewsH2 } from './NewsElements';

const News = () => {
    return (
        <NewsContainer>
            <NewsH1>Latest News</NewsH1>
            <NewsWrapper>
                <NewsCard>
                    <NewsImg />
                    <NewsP>07/23/21 <span>DEV</span></NewsP>
                    <NewsH2>HOW WE BROUGHT THE SENTINELS OF LIGHT TO VALORANT</NewsH2>
                </NewsCard>
                <NewsCard>
                    <NewsImg />
                    <NewsP>07/20/21 <span>GAME UPDATES</span></NewsP>
                    <NewsH2>VALORANT PATCH NOTES 3.02</NewsH2>
                </NewsCard>
                <NewsCard>
                    <NewsImg />
                    <NewsP>07/12/21 <span>ESPORTS</span></NewsP>
                    <NewsH2>COMPETITIVE RULING: TEAM BESTIES</NewsH2>
                </NewsCard>
            </NewsWrapper>
        </NewsContainer>
    )
}

export default News;
