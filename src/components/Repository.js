import React from 'react'
import { useRepoContext } from '../contexts/user'
import { InnerCard, Author, Span } from '../elements'

const Repository = () => {

    const repoContext = useRepoContext()
    return (

        <InnerCard key={repoContext.id}>
            <Author>Full Name: {repoContext.full_name}</Author>
            <Span>Description: {repoContext.description}</Span>
            <Span>Stargazers: {repoContext.stargazers_count}</Span>
            <Span>Open Issues: {repoContext.open_issues}</Span>
            <Span>Score: {repoContext.score}</Span>

            <Span><a href={repoContext.pull_url}> {repoContext.pull_url ? `Pull Request` : 'None'}</a></Span>
            <Span><a href={repoContext.issues_url}> Issues</a></Span>
            <Span>License: {repoContext.license ? repoContext.license.name : `None`}</Span>

        </InnerCard>
    )
}

export default Repository


