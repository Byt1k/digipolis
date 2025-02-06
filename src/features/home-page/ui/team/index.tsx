import React from "react";
import {Container} from "@/shared";
import s from "./index.module.scss";

export const Team: React.FC = () => {
    return (
        <section className={s.team}>
            <Container>
                <div className={s.title}>
                    <h2>Команда <br/>и экспертиза</h2>
                    <p>Наша команда, обладая огромным опытом работы, неизменно стремится к повы-шению своих навыков и компетенций, чтобы оставаться в авангарде индустрии. Мы активно вкладываемся в развитие нашей экспертизы и использование современных технологий, что позволяет нам эффективно адаптироваться к динамично меняющим-ся требованиям рынка и предоставлять клиентам наилучшие решения.</p>
                </div>
                <div className={s.grid}>
                    <div className={s.item}>
                        <img src="/home-page/team-item-1.png" alt="member"/>
                        <span>Проджект-менеджер</span>
                        <p>Александр Александров</p>
                        <span>Превращает сложные задачи в эффективные решения</span>
                    </div>
                    <div className={s.item}>
                        <img src="/home-page/team-item-1.png" alt="member"/>
                        <span>Проджект-менеджер</span>
                        <p>Александр Александров</p>
                        <span>Превращает сложные задачи в эффективные решения</span>
                    </div>
                    <div className={s.item}>
                        <img src="/home-page/team-item-1.png" alt="member"/>
                        <span>Проджект-менеджер</span>
                        <p>Александр Александров</p>
                        <span>Превращает сложные задачи в эффективные решения</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};
