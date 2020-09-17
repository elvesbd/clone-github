import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/elvesbd'}>
          elvesbd
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/elvesbd/clone-github'}>
          clone-github
        </Link>
      </Breadcrumb>

      <p>One more exercise to perfect myself</p>

      <Stats>
        <li>
          <StarIcon />
          <b>10</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/elvesbd'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;