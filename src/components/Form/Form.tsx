import React, { Fragment, useEffect, useState } from 'react'
import { StyledForm } from './Form.style'
import Seta from '../../assets/Image/Seta.svg';
import { ButtonForm } from '../../components/Button/Button.style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BannerTicket } from '../../components/Banner/Banner.style'

interface FormValues {
    name: string
    email: string
    ticket: string
    date: Date
}

const schema = yup.object({
    name: yup.string().required('O nome é necessário!'),
    email: yup.string().required('O e-mail é necessário!'),
    ticket: yup.string(),
    date: yup.date()
}).required();

export const Form = ({ DataForm }: any) => {

    const { register, handleSubmit, formState:{errors} } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = handleSubmit((data) => DataForm(data)); 
    const [media, setMedia] = useState<Boolean>(false)

    useEffect(() => {
        window.matchMedia("(min-width: 1440px)").matches ? setMedia(true) : setMedia(false)
    }, [])
    
    

    return(
        <React.Fragment>
        <BannerTicket />
            <StyledForm>
                <h1>Preencha o formulário a seguir:</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nome completo:</label>
                        <input type='text' {...register("name")}/>
                        {errors.name ? (<p>{errors.name?.message}</p>) : <Fragment></Fragment> }
                    </div>

                    <div>
                        <label>Email:</label>
                        <input type='email' {...register("email")} />
                        {errors.email ? (<p>{errors.email?.message}</p>) : <Fragment></Fragment> }
                    </div>

                    <div>
                        <label>Tipo de ingresso</label>
                        <select {...register("ticket")}>
                            <option>Tipo de ingresso</option>
                            <option>Tipo de ingresso</option>
                        </select>
                    </div>
                    
                    <div>
                        <label>Data de nascimento:</label>
                        <input type='date' {...register("date")}/>
                        {errors.date ? (<p>É necessário selecionar uma data.</p>) : <Fragment></Fragment> }
                    </div>
                    <ButtonForm>
                        Avançar! 
                        <img src={Seta} alt='Avançar!' />
                    </ButtonForm>
                </form>
            </StyledForm>
        </React.Fragment>
    )
}