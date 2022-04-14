import { Header } from '../../src/components/organisms/Header/Header'
import Sticky from 'react-stickynode';
import { HeaderMobile } from '../../src/components/organisms/Header/HeaderMobile'
import MediaQuery from 'react-responsive'

export const HeaderDefault = () => {
    return (
        <Sticky enabled={true} innerZ={1000}>
            <MediaQuery maxWidth={990}>
                <HeaderMobile />
            </MediaQuery>
            <MediaQuery minWidth={991}>
                <Header />
            </MediaQuery>
        </Sticky>
    )
}