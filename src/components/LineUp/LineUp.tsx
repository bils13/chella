import React from 'react'
import { Line, StyledLineUp, Wrapper } from './LineUp.style'

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
    b14?: string
}

export const LineUp = ({ day, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14 }: LineUpProps) => {
    return (
        <StyledLineUp>
            <Line>
                <div></div><p>{day}</p><div></div>
            </Line>
            <h2>{b1}</h2>
            <Wrapper>
                <div>
                    <h5>{b2}</h5>
                    <h5>{b3}</h5>
                    <h5>{b4}</h5>
                    <h5>{b5}</h5>
                    {b14 ? (<h5>{b6}</h5>) : '' }
                </div>
                <div>
                {b14 ? (<h5>{b7}</h5>) : (<h5>{b6}</h5>) }
                {b14 ? (<h5>{b8}</h5>) : (<h5>{b7}</h5>) }
                {b14 ? (<h5>{b9}</h5>) : (<h5>{b8}</h5>) }
                {b14 ? (<h5>{b10}</h5>) : (<h5>{b9}</h5>) }
                {b14 ? (<h5>{b11}</h5>) : '' }
                </div>
                <div>
                {b14 ? (<h5>{b12}</h5>) : (<h5>{b10}</h5>) }
                {b14 ? (<h5>{b13}</h5>) : (<h5>{b11}</h5>) }
                {b14 ? (<h5>{b14}</h5>) : (<h5>{b12}</h5>) }
                {b14 ? '' : (<h5>{b13}</h5>) }
                </div>
            </Wrapper>
        </StyledLineUp>
    )
}

export default LineUp
