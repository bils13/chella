import React from 'react'
import { StyledLineUp, StyledSinger1, StyledSinger10, StyledSinger11, StyledSinger12, StyledSinger13, StyledSinger2, StyledSinger3, StyledSinger4, StyledSinger5, StyledSinger6, StyledSinger7, StyledSinger8, StyledSinger9 } from '../UI/LineUp.style'
import { StyledSpan } from '../UI/Span.style'

interface LineUpProps {
    className?: string
    day: string
    b1: string
    b2: string
    b3: string
    b4: string
    b5: string
    b6: string
    b7: string
    b8: string
    b9: string
    b10: string
    b11: string
    b12: string
    b13: string
}

export const LineUp = ({ day, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13 }: LineUpProps) => {
    return (
        <StyledLineUp>
            <p>{day}</p>
            <ul>
                <StyledSinger1>{b1}</StyledSinger1>
                <StyledSinger2>{b2}</StyledSinger2>
                <StyledSinger3>{b3}</StyledSinger3>
                <StyledSinger4>{b4}</StyledSinger4>
                <StyledSinger5>{b5}</StyledSinger5>
                <StyledSinger6>{b6}</StyledSinger6>
                <StyledSinger7>{b7}</StyledSinger7>
                <StyledSinger8>{b8}</StyledSinger8>
                <StyledSinger9>{b9}</StyledSinger9>
                <StyledSinger10>{b10}</StyledSinger10>
                <StyledSinger11>{b11}</StyledSinger11>
                <StyledSinger12>{b12}</StyledSinger12>
                <StyledSinger13>{b13}</StyledSinger13>
            </ul>
        </StyledLineUp>
    )
}

export default LineUp
    
    // <StyledDivGeneric 
    //             backgroundColor='#DF9010'
    //             marginTop='80px'
    //             padding='16px'>
    //             <StyledText
    //                 fontFamily="'Calistoga', Arial, Helvetica, arial"
    //                 fontWeight='400'
    //                 fontSize='32px'
    //                 color='#ffffff'
    //                 textAlign='center'>SÁBADO 11/03</StyledText>
    //         </StyledDivGeneric>
    //         <StyledDivGeneric
    //             backgroundColor='inherit'
    //             marginTop='48px'
    //             padding='0'>
    //                 <StyledTitle
    //                     fontFamily="'Raleway', Arial, Helvetica, arial"
    //                     fontWeight='800'
    //                     fontSize='48px'
    //                     color='#444444'
    //                     textAlign='center'>System Of a DOM
    //                 </StyledTitle>
    //                 <StyledSubTitle
    //                     fontFamily="'Raleway', Arial, Helvetica, arial"
    //                     fontWeight='700'
    //                     fontSize='35px'
    //                     color='#444444'
    //                     textAlign='center'>
    //                         <StyledSpan marginTop='32px'>Python Maiden</StyledSpan>
    //                         <StyledSpan marginTop='16px'>Apollo Cliente 2001</StyledSpan>
    //                         <StyledSpan marginTop='32px'>Bon Java</StyledSpan>
    //                         <StyledSpan marginTop='16px'>NickCallback</StyledSpan>
    //                 </StyledSubTitle>
    //                 <StyledSubTitle3
    //                     fontFamily="'Raleway', Arial, Helvetica, arial"
    //                     fontWeight='600'
    //                     fontSize='30px'
    //                     color='#444444'
    //                     textAlign='center'>
    //                         <StyledSpan marginTop='32px'>Linkin Promises</StyledSpan>
    //                         <StyledSpan marginTop='16px'>Fullstack Fighters</StyledSpan>
    //                         <StyledSpan marginTop='32px'>Papa React</StyledSpan>
    //                         <StyledSpan marginTop='16px'>Angular in Chains</StyledSpan>
    //                 </StyledSubTitle3>
    //                 <StyledSubTitle4
    //                     fontFamily="'Raleway', Arial, Helvetica, arial"
    //                     fontWeight='500'
    //                     fontSize='30px'
    //                     color='#444444'
    //                     textAlign='center'>
    //                         <StyledSpan marginTop='32px'>Agnostic Front-end</StyledSpan>
    //                         <StyledSpan marginTop='16px'>SplikNode</StyledSpan>
    //                         <StyledSpan marginTop='32px'>Pink Flutter</StyledSpan>
    //                         <StyledSpan marginTop='16px'>Kiss</StyledSpan>
    //                 </StyledSubTitle4>
    //         </StyledDivGeneric>