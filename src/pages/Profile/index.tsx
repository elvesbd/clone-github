import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'elvesbd'}
            name={'Elves Brito'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/50971534?s=460&u=e96a212ba23f0a02b5cd1c244c1b874c20aed4f2&v=4'}
            followers={500}
            following={8}
            company={'Ecolab'}
            location={'Fortaleza, Brazil'}
            email={'elvesbd@yahoo.com'}
            blog={'linkedin.com/in/elvesbd'}
          />
        </LeftSide>
        
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'elvesbd'}
                  reponame={'ecoleta'}
                  description={'App para cadastro de pontos de coleta'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={9}
                  forks={3}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;