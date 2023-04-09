import React, { Fragment, useState } from 'react' 
import { StyledGradienteBackground } from '../../components/GlobalStyle/GlobalStyle.style'
import Navbar from '../../components/Navbar/Navbar'
import { StyledFooter } from '../../components/Footer/Footer.style'
import { Form } from '../../components/Form/Form'
import InfoTicket from '../../components/InfoTicket/InfoTicket'


export const Ticket = () => {

    const [ticket, setTicket] = useState<Boolean>(false)
    const DataForm = (data: Object) => {
        data && setTicket(true)
    }

    return (
        <React.Fragment>
            <Navbar />
            
            <StyledGradienteBackground>
                {ticket===false && <Form DataForm={DataForm} />}
                {ticket===true && <InfoTicket />}
                <StyledFooter />
            </StyledGradienteBackground>
        </React.Fragment>
    )
}

export default Ticket