import { createGlobalStyle } from "styled-components";
import WebApp from '@twa-dev/sdk'

const createFontFamily = () => {
    const platform = WebApp.platform;

    if (platform === 'ios' || platform === 'macos') {
        return 'font-family: "SF-Pro", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important;'
    } else {
        return 'font-family: "Roboto", sans-serif !important;'
    }
}

const Gstyles: any = createGlobalStyle<{ connectButtonColor: string }>`

* {
    ${createFontFamily()}
    font-weight: 400;
    font-style: normal;
}


`;


export default Gstyles;