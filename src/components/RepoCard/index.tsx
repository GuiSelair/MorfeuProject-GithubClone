import React from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  Container,
  Topside,
  Botside,
  RepoIcon,
  StarIcon,
  ForkIcon,
} from './styles';

interface IReposProps {
  user: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<IReposProps> = ({
  user,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${user}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </Topside>
      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
