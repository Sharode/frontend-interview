import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../elements/Spinner'
import { InnerCard, CardWrapper, Author, Span, Main } from "../elements"
import { useSetRepoContext } from "../contexts/user";


export const RepositorySearchResults = ({ searchResults }) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const setRepoContext = useSetRepoContext()

    useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            let url = `https://api.github.com/search/repositories?q=${searchResults}`
            try {

                let response = await fetch(url)
                let data = await response.json()
                setData(data)
                if (data.items) {
                    setLoading(false)
                }
            } catch (error) {
            }
        }
        fetchData()
    }, [searchResults])

    const handleClick = (repo) => {
        setRepoContext(repo)
    }
    return (
        <Main>
            {loading && <Spinner />}
            {data && data.total_count > 0 ? (
                <CardWrapper>
                    {data.items.map((repo) => (
                        <Link
                            onClick={() => handleClick(repo)}
                            to={`/repositories/${repo.id}`}>
                            <InnerCard key={repo.id}>
                                <Author>Full Name: {repo.full_name}</Author>
                                <Span>Description: {repo.description}</Span>
                                <Span>Stargazers: {repo.stargazers_count}</Span>
                                <Span>Open Issues: {repo.open_issues}</Span>
                                <Span>Score: {repo.score}</Span>
                            </InnerCard>
                        </Link>
                    ))}
                </CardWrapper>)
                : (!loading && 'empty')}
        </Main>
    )
}
