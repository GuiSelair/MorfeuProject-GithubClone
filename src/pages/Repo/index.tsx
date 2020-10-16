import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogo } from '../../components/Header/styles';
import { ForkIcon, RepoIcon, StarIcon } from '../../components/RepoCard/styles';

import { Container, Breadcrumb, Stats, LinkButton } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to="/guiselair">
          guiselair
        </Link>
        <span>/</span>

        <Link className="reponame" to="/guiselair/YoutubeUI-Github-Clone">
          YoutubeUI-Github-Clone
        </Link>
      </Breadcrumb>

      <p>Clone da Interface do Github</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/GuiSelair/Youtube-UI-Github-Clone">
        <GithubLogo />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
