import styled from 'styled-components'
import Layout from '../components/layout/Layout'

const Title = styled.h1`
  font-family: 'georgia';
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Layout><Title>My page</Title></Layout>
  )
}