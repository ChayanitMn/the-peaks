import { ReactNode } from "react";
import styled from "styled-components";
import { Footer,Header } from ".";
// import useWindowSize from '../../utils/hooks/useWindowSize'

type Props = {
    children?: ReactNode
}

const LayoutComponent = ({children}: Props) => {
    // const [width] = useWindowSize()
    return (
        <>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
        </>
    )
}

export default LayoutComponent

const Container = styled.div`

`