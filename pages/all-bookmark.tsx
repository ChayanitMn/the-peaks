import styled from 'styled-components'
import Layout from '../components/layout/Layout'

export default function AllBookmark() {
    return (
        <Layout>
            <Container>
                <Category>All bookmark</Category>
                <Content>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success Liverpool
                                    Premier League trophy lift: Special ceremony
                                    to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark succes
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                </Content>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    max-width: ${({ theme }) => theme.layout.width};
    width: 100%;
    margin: 0 auto 100px;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        margin: 0 auto 50px;
    }
`

const Category = styled.h1`
    font-family: Georgia;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: rgba(0, 0, 0, 0.87);
    line-height: 49px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        font-size: 36px;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 30px 15px;
    grid-auto-flow: row;
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        grid-template-columns: 1.5fr 1.5fr;
        grid-template-rows: 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 30px 0px;
    }
`
const Card = styled.div`
    position: relative;
`

const NewsImg = styled.img`
    width: 100%;
`

const WrapTitle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 134px;
    width: 100%;
    background: rgba(9, 53, 123, 0.9);
    border-bottom: 3px solid #d32f2f; ;
`

const Title = styled.h3`
    display: -webkit-box;
    font-family: Georgia;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.07px;
    color: #ffffff;
    padding: 10px 10px 0px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
