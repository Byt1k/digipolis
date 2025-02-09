import React from 'react'
import { svgIcons } from '@/shared'

interface IService {
    name: string
    items: Array<{ icon: React.ReactNode; name: string }>
}

export const services: [IService[], IService[]] = [
    [
        {
            name: 'Разработка сайтов',
            items: [
                {
                    icon: svgIcons.services.webSites.businessCard,
                    name: 'Сайт-визитка',
                },
                {
                    icon: svgIcons.services.webSites.corporate,
                    name: 'Корпоративный сайт',
                },
                {
                    icon: svgIcons.services.webSites.market,
                    name: 'Интернет-магазин',
                },
                {
                    icon: svgIcons.services.webSites.lending,
                    name: 'Лендинг',
                },
                {
                    icon: svgIcons.services.webSites.service,
                    name: 'Сайт-сервис',
                },
                {
                    icon: svgIcons.services.webSites.cms,
                    name: 'CMS',
                },
                {
                    icon: svgIcons.services.webSites.crm,
                    name: 'CRM',
                },
            ],
        },
        {
            name: 'Дизайн и брендинг',
            items: [
                {
                    icon: svgIcons.services.design.logo,
                    name: 'Логотип',
                },
                {
                    icon: svgIcons.services.design.brandBook,
                    name: 'Фирменный стиль',
                },
                {
                    icon: svgIcons.services.design.ui,
                    name: 'Дизайн интерфейса',
                },
            ],
        },
    ],
    [
        {
            name: 'Инфраструктура',
            items: [
                {
                    icon: svgIcons.services.infrastructure.database,
                    name: 'Проектирование баз данных',
                },
                {
                    icon: svgIcons.services.infrastructure.hosting,
                    name: 'Размещение на хостинге',
                },
                {
                    icon: svgIcons.services.infrastructure.security,
                    name: 'Обеспечение безопасности данных',
                },
                {
                    icon: svgIcons.services.infrastructure.integration,
                    name: 'Интеграфия с внешними системами',
                },
                {
                    icon: svgIcons.services.infrastructure.automation,
                    name: 'Автоматизация бизнес-процессов',
                },
            ],
        },
        {
            name: 'Поддержка \nи обслуживание',
            items: [
                {
                    icon: svgIcons.services.support.content,
                    name: 'Создание контента',
                },
                {
                    icon: svgIcons.services.support.testing,
                    name: 'Тестирование',
                },
                {
                    icon: svgIcons.services.support.optimization,
                    name: 'Оптимизация',
                },
                {
                    icon: svgIcons.services.support.analytic,
                    name: 'Аналитика',
                },
            ],
        },
    ],
]
