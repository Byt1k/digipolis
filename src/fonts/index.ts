import localFont from 'next/font/local'
import {Montserrat} from 'next/font/google'

export const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["cyrillic"],
});


export const phonk_sans = localFont({
    src: './PhonkSans-Light.otf',
    display: 'swap',
    variable: '--font-phonk-sans',
})