'use server'

import { cookies } from 'next/headers'

export const setCookieAction = async (
    name: string,
    value: string,
): Promise<void> => {
    const cookieStore = await cookies()

    cookieStore.set({ name, value, httpOnly: true, path: '/' })
}
