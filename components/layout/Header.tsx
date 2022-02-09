import styled from "styled-components";

export default function Header() {
    return (
    <Container>
        <WrapHeader>
            <Logo src="/header/logo.svg" alt="The Peaks logo" />
            <SearchWrap>
                <Search src="/header/search.svg" alt="search" />
            </SearchWrap>
        </WrapHeader>
    </Container>)
}

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`
const WrapHeader = styled.div`
    max-width: ${({ theme }) => theme.layout.width};
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.xl }) {
        justify-content: space-around;
    }
`

const Logo = styled.img`
    width: 142px;
    height: auto;
    padding: 31px 0px 39px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md }) {
        width: 100px;
    }

`
const SearchWrap = styled.div`
    position: relative;
    width: 90px;
    border-bottom: 2px solid #fff;
    @media (max-width: ${({ theme }) => theme.breakpoint.md }) {
        width: 50px;
    }
`

const Search = styled.img`
    position: absolute;
    width: 17px;
    height: auto;
    left: 40%;
    bottom: 12px;
`