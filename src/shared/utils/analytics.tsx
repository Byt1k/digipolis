import Script from 'next/script'

export const Analytics = () => {
    if (process.env.NODE_ENV !== 'production') {
        return
    }

    return (
        <>
            {/* Google */}
            <Script
                strategy="afterInteractive"
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-asfasfsa"
            />
            <Script
                id="google-analytics-G-asfasfasf"
                strategy="afterInteractive"
            >
                {`
                   window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'asfasfasfasf');
                `}
            </Script>

            {/* Yandex */}
            <Script id="yandex-metrika-asfasfas" strategy="afterInteractive">
                {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                   m[i].l=1*new Date();
                   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                   ym(asfasfasfasf, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
               `}
            </Script>
        </>
    )
}
