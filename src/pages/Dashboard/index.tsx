import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoIcon from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoIcon} alt="logo" />
      <Title>Explore repositórios no github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38964840?s=460&u=d2252c0eff05c0af5dbd8c3944b5a3eaaed5f84c&v=4"
            alt="wallison Moura"
          />
          <div>
            <strong>Devflix</strong>
            <p>
              Web application with React, where to bookmark and list YouTube
              videos.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38964840?s=460&u=d2252c0eff05c0af5dbd8c3944b5a3eaaed5f84c&v=4"
            alt="wallison Moura"
          />
          <div>
            <strong>Devflix</strong>
            <p>
              Web application with React, where to bookmark and list YouTube
              videos.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38964840?s=460&u=d2252c0eff05c0af5dbd8c3944b5a3eaaed5f84c&v=4"
            alt="wallison Moura"
          />
          <div>
            <strong>Devflix</strong>
            <p>
              Web application with React, where to bookmark and list YouTube
              videos.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
