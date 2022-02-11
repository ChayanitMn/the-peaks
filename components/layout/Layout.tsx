import { ReactNode } from 'react'
import styled from 'styled-components'
import { Footer, Header } from '.'

type Props = {
    children?: ReactNode
}

const LayoutComponent = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </>
    )
}

export default LayoutComponent

const Container = styled.div`
    padding: 0 16px;
`
