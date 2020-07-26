import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState(''); // Estado para armazenar valor do input
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    // Adição de um novo repositoório
    // Consumir API do Github
    // Salvar novo repositório no estado
    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;
            
            setRepositories([...repositories, repository]);
            
            setInputError('');
            // Limpar input
            setNewRepo('');
        } catch(err) {
            setInputError('Erro na busca por esse repositório');
        }

    }
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório" 
                />
                <button type="submit">Pesquisar</button>
            </ Form>

            { inputError && <Error>{inputError}</Error> }

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="">
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
    
                    <FiChevronRight size={20} />
                    </a>
                ))}
            </ Repositories>
        </>
    );
};

export default Dashboard;