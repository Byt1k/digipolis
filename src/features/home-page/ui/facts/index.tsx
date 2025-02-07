import React from 'react'
import { Container } from '@/shared'
import s from './index.module.scss'

export const Facts: React.FC = () => {
    return (
        <section className={s.facts}>
            <Container>
                <h2>Цифры и факты</h2>
                <div className={s.grid}>
                    <div
                        className={s.item}
                        style={{
                            backgroundImage: 'url(/home-page/fact-bg-1.png)',
                        }}
                    >
                        <p>20+</p>
                        <span>
                            лет опыта <br />в разработке
                        </span>
                    </div>
                    <div
                        className={s.item}
                        style={{
                            backgroundImage: 'url(/home-page/fact-bg-2.png)',
                        }}
                    >
                        <p>5+</p>
                        <span>
                            лет в сфере <br />
                            реального бизнеса
                        </span>
                    </div>
                    <div
                        className={s.item}
                        style={{
                            backgroundImage: 'url(/home-page/fact-bg-3.png)',
                        }}
                    >
                        <p>10+</p>
                        <span>
                            крупных IT-проектов <br />
                            мы сделали
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}
