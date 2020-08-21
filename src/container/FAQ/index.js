import React from 'react'
import {isMobile} from 'react-device-detect';
import Styled from 'styled-components'

import MobileFAQ from '../../Mobile/components/Main/FAQ/index'

import Faqs from '../../components/Main/Faq/index'

const FAQStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

`;

const Faq = () => {
    if (isMobile) {
        return (
            <div>
                <MobileFAQ />
            </div>
        )
      }
    return (
        <FAQStyle>
            <Faqs />
        </FAQStyle>
    )
}

export default Faq
