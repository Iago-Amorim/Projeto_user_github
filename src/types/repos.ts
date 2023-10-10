export type ReposListProps  = {
    repos: ReposProps[];    
}

// Define um tipo para os objetos de repositório
export type ReposProps  = {
    name: string;
    html_url: string;
    watchers_count: number;
    stargazers_count: number;
    language: string;
}