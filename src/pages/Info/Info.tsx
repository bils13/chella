import React, { useState } from 'react'
import { BannerInfoGeral } from '../../components/Banner/Banner.style'
import { StyledGradienteBackground } from '../../components/GlobalStyle/GlobalStyle.style'
import Navbar from '../../components/Navbar/Navbar'
import { Answer, Faq, Question } from './Info.style'
import Arrow from '../../assets/Image/Arrow.svg'
import { StyledFooter } from '../../components/Footer/Footer.style'

export const Info = () => {

    // const [isActive, setIsActive] = useState<Boolean>(false)
    function handleClick(event: any) {
        event.target.classList.toggle('block')
    }
    
    return (
        <React.Fragment>
            <Navbar />
            <BannerInfoGeral />
            <StyledGradienteBackground>
                <Faq>
                    <h1>Perguntas Frequentes</h1>
                    <Question onClick={(event) => handleClick(event)} >
                        <h2>Quais serão as atrações?
                            <img src={Arrow} alt='Seta para baixo'/>
                        </h2>
                        <Answer>
                            <p>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock,
                                e o segundo (12/03) com bandas pop. Confira o line-up
                                em detalhes clicando neste link!</p>
                        </Answer>
                    </Question>
                    <Question onClick={(event) => handleClick(event)}>
                        <h2>Qual a classificação etária?
                            <img src={Arrow} alt='Seta para baixo'/>
                        </h2>
                        <Answer>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s!</p>
                        </Answer>
                    </Question>
                    <Question onClick={handleClick}>
                        <h2>Quais são os setores disponíveis?
                            <img src={Arrow} alt='Seta para baixo'/>
                        </h2>
                        <Answer>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s!</p>
                        </Answer>
                    </Question>
                    <Question onClick={handleClick}>
                        <h2>Quais são os itens proibidos?
                            <img src={Arrow} alt='Seta para baixo'/>
                        </h2>
                        <Answer>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s!</p>
                        </Answer>
                    </Question>
                    <Question onClick={handleClick}>
                        <h2>Quais são os itens proibidos?
                            <img src={Arrow} alt='Seta para baixo'/>
                        </h2>
                        <Answer>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s!</p>
                        </Answer>
                    </Question>
                </Faq>
                <StyledFooter />
            </StyledGradienteBackground>
        </React.Fragment>
    )
}

export default Info