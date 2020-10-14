import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="guiselair"
            name="Guilherme Selair"
            avatarUrl="https://avatars0.githubusercontent.com/u/39627743?s=460&u=0a9aece8f69e86a5698f8dd7e05c6391304fa1e3&v=4"
            followers={887}
            following={7}
            company="Lunix Tecnologia"
            location="Santa Maria, Brasil"
            email="guilherme.lima1997@hotmail.com"
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username="guiselair"
                  reponame="youtube-github"
                  description="UIClone do Github com Dark Mode"
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={2}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
