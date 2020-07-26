import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/dashboard">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src=""
                        alt=""
                    />
                    <div>
                        <strong>camillacorreia</strong>
                        <p>sdgffgydsfydf</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>656464</strong>
                        <span>Stars</span>
                    </li>

                    <li>
                        <strong>6564</strong>
                        <span>Forks</span>
                    </li>

                    <li>
                        <strong>6656</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </ RepositoryInfo>

            <Issues>
                <Link to="/">
                    <div>
                        <strong>dsdsdgsdggd</strong>
                        <p>dsdd</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </ Issues>
        </>
    );
};

export default Repository;