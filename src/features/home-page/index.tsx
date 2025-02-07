import React from 'react'
import { MainScreen } from './ui/main-screen'
import { Services } from './ui/services'
import { Facts } from './ui/facts'
import { Team } from './ui/team'
import { Advantages } from './ui/advantages'
import { Cases } from './ui/cases'
import { Calculator } from './ui/calculator'
import { Form } from './ui/form'

const HomePage = () => {
    return (
        <>
            <MainScreen />
            <Services />
            <Facts />
            <Team />
            <Advantages />
            <Cases />
            <Calculator />
            <Form />
        </>
    )
}

export default HomePage
