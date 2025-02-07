import React from 'react'
import { svgIcons } from '@/shared'

interface Service {
    icon: React.ReactNode
    name: string
}

type ServiceSectors = 'webSites' | 'design' | 'infrastructure' | 'support'

export const services: Record<ServiceSectors, Service[]> = {
    webSites: [
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
    design: [
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
    infrastructure: [
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
    support: [
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
}
