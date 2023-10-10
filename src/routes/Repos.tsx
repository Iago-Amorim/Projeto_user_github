import { useParams } from "react-router-dom"

import { useState, useEffect } from "react"

import { ReposProps } from "../types/repos"
import ReposList from "../components/ReposList"

const Repos = () => {
  const { userName } = useParams()

  const [repos, setRepos] = useState<ReposProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${userName}/repos`)
        
        const data = await res.json()
        
        const reposData: ReposProps[] = data.map((item: ReposProps) => ({
          name: item.name,
          html_url: item.html_url,
          watchers_count: item.watchers_count,
          stargazers_count: item.stargazers_count,
          language: item.language,
        }))
        
        setRepos(reposData) 
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error)
      }
    }
  
    fetchData()
  }, [userName])

  return (
    <div>
      <h3>Explore os repositórios do usuário: { userName }</h3>
      <ReposList repos={ repos } />
    </div>
  )
}

export default Repos