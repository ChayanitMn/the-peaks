import styled from 'styled-components'

export default function Spinner() {
    return <Loader></Loader>
}

const Loader = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    border: 5px solid #fff;
    border-top: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0;
`
