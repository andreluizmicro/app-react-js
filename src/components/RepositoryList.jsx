import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/respositories.scss';

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/andreluizmicro/repos')
        .then(respone => respone.json())
        .then(data => setRepositories(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
               
            </ul>
        </section>
    );
}