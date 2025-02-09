'use client'

import React, { useActionState, useState } from 'react'
import { Button, Container, Input, svgIcons, Textarea } from '@/shared'
import s from './index.module.scss'
import { Checkbox } from '@/shared/ui/checkbox'
import classNames from 'classnames'
import Image from 'next/image'
import { Element } from 'react-scroll'
import { useAppSelector } from '@/shared/client'
import { sendMail, SendMailBody } from '../../actions/send-mail'
import { toast } from 'react-toastify'

interface FormState {
    data: {
        name: string
        tel: string
        email: string
        message: string
    }
    error: string | null
}

export const Form: React.FC = () => {
    const homePageState = useAppSelector(state => state.homePage)

    const initialFormState: FormState = {
        data: {
            name: '',
            tel: '',
            email: '',
            message: '',
        },
        error: null,
    }

    const [isAgree, setIsAgree] = useState(false)

    const submitForm = async (
        prevState: FormState,
        formData: FormData,
    ): Promise<FormState> => {
        const data = Object.fromEntries(formData.entries()) as FormState['data']

        if (!isAgree) {
            return {
                data,
                error: 'Подтверждение ознакомления с политикой обработки персональных данных обязательно',
            }
        }

        if (!data.tel && !data.email) {
            return {
                data,
                error: 'Укажите номер телефона или email',
            }
        }

        try {
            const body: SendMailBody = {
                ...data,
                service: homePageState.service,
                cases: homePageState.cases.map(c => c.name).join(',\n'),
                calculatorServices: homePageState.calculatorServices
                    .map(c => c.name)
                    .join(',\n'),
            }

            await sendMail(body)

            toast.success('Заявка успешно отправлена!')

            return initialFormState
        } catch (e: any) {
            return {
                data,
                error: e.message,
            }
        }
    }

    const [formState, action, isPending] = useActionState(
        submitForm,
        initialFormState,
    )

    return (
        <Element name="form" className={s.form}>
            <Container className={s.container}>
                <div className={s.title}>
                    <p>Готовы сотрудничать?</p>
                    <span>
                        Оставьте ваше сообщение и мы свяжемся с вами в ближайшее
                        время
                    </span>
                    <Image
                        src="/home-page/form-img.png"
                        alt="form"
                        width={600}
                        height={270}
                    />
                </div>
                <form action={action} className={s.grid}>
                    <Input
                        className={s.fullWidth}
                        type="text"
                        name="name"
                        required
                        placeholder="Имя"
                        defaultValue={formState.data.name}
                    />
                    <Input
                        type="tel"
                        name="tel"
                        placeholder="Телефон"
                        defaultValue={formState.data.tel}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        defaultValue={formState.data.email}
                    />
                    <Textarea
                        className={s.fullWidth}
                        name="message"
                        placeholder="Кратко расскажите о вашей проблеме"
                        defaultValue={formState.data.message}
                    />

                    <Checkbox
                        checked={isAgree}
                        onChange={v => setIsAgree(v)}
                        className={classNames(s.fullWidth, s.checkbox)}
                    >
                        Отправляя форму, я подтверждаю, что ознакомился с
                        политикой обработки персональных данных
                    </Checkbox>

                    <Button className={s.btn} disabled={isPending}>
                        Оставить заявку
                        {svgIcons.button.arrow}
                    </Button>

                    {formState.error && (
                        <p className={s.error}>{formState.error}</p>
                    )}
                </form>
            </Container>
        </Element>
    )
}
