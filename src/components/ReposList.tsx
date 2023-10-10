import { ReposListProps } from "../types/repos"

import { VscCode } from "react-icons/vsc"
import { AiOutlineStar } from "react-icons/ai"
import { GoRepoForked } from "react-icons/go"
import { RiGitRepositoryLine } from "react-icons/ri"
import classes from './ReposList.module.css'

const ReposList = ({ repos }: ReposListProps) => {
    return (
        <>
            <a className={classes.voltar} href="/">Voltar</a>
            <div className={classes.repos_container}>
                {repos.map((repo) => (
                    <div className={classes.repos_card}>
                        <h4>{repo.name}</h4>
                        <div className={classes.card_language}>
                            <VscCode />
                            <p>{repo.language}</p>
                        </div>
                        <div className={classes.card_numbers}>
                            <div className={classes.card_number}>
                                <AiOutlineStar />
                                <p>{repo.stargazers_count}</p>
                            </div>
                            <div className={classes.card_number}>
                                <GoRepoForked />
                                <p>{repo.watchers_count}</p>
                            </div>
                        </div>
                        <a href={repo.html_url} target="_blank">Ver código <RiGitRepositoryLine/></a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReposList