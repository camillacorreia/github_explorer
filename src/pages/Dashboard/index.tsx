import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </ Form>

            <Repositories>
                <a href="">
                   <img
                        src="https://avatars3.githubusercontent.com/u/50275354?s=460&u=ab6a13576a9ed46db6faa2376c5ae2311bc492d3&v=4"
                        alt="Camilla Correia"
                    />
                    <div>
                        <strong>camillacorreia/github_explorer</strong>
                        <p>Explore repositórios incríveis do github - feito com ReactJS, TypeScript e styled-components.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </ Repositories>
        </>
    );
};

export default Dashboard;