import styled from "styled-components";

export default function Footer() {
    return (<Container></Container>)
}

const Container = styled.footer`
    position: absolute;
    bottom: 0;
    height: 243px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    @media (max-width: ${({ theme }) => theme.breakpoint.md }) {
        height: 100px;
    }


`