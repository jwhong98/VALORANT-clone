import React from 'react'
import Img1 from "../../Images/img-1.jpeg";
import Img2 from "../../Images/img-2.jpeg";
import Img3 from "../../Images/img-3.jpeg";
import { NewsContainer, NewsWrapper, NewsH1, NewsCard, NewsImg, NewsP, NewsH2 } from './NewsElements';

const News = () => {
    return (
        <NewsContainer>
            <NewsH1>Latest News</NewsH1>
            <NewsWrapper>
                <NewsCard>
                    <NewsImg src={Img1}/>
                    <NewsP>07/23/21 <span>DEV</span></NewsP>
                    <NewsH2>HOW WE BROUGHT THE SENTINELS OF LIGHT TO VALORANT</NewsH2>
                </NewsCard>
                <NewsCard>
                    <NewsImg src={Img2}/>
                    <NewsP>07/20/21 <span>GAME UPDATES</span></NewsP>
                    <NewsH2>VALORANT PATCH NOTES 3.02</NewsH2>
                </NewsCard>
                <NewsCard>
                    <NewsImg src={Img3}/>
                    <NewsP>07/12/21 <span>ESPORTS</span></NewsP>
                    <NewsH2>COMPETITIVE RULING: TEAM BESTIES</NewsH2>
                </NewsCard>
            </NewsWrapper>
        </NewsContainer>
    )
}

export default News;
