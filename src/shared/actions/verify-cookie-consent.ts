'use server'

import { cookies } from 'next/headers'

export const verifyCookieConsent = async (): Promise<boolean> => {
    const cookieStore = await cookies()
    const cookieConsent = cookieStore.get('cookie_consent')

    return !!cookieConsent
}
