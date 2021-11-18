import React from 'react';
import { FaJsSquare, FaReact, FaNode, FaHtml5, FaCss3, FaGitSquare, FaAws } from 'react-icons/fa';
import { SiRedux, SiFramer, SiGooglecloud, SiMysql, SiMongodb, SiTypescript, SiStorybook, SiTailwindcss } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="techno">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a full stack developer, I've worked with a range of technologies and services. However, always gravitate towards the hottest and most cutting edge frontend frameworks and libraries.
    </SectionText>
    <List>
      <ListItem>
        <FaJsSquare size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph> +3 years of experience <br />
            ES6 + JQuery, Loadash
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReact size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>React.JS</ListTitle>
          <ListParagraph> +3 years of experience. <br />
            NEXT.js + Zustand <br />
            React Native, Context API.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNode size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>Node.JS</ListTitle>
          <ListParagraph> +3 years of experience <br />
          Express.js, Axios & Passport.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaHtml5 size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph> +3 years of experience. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaCss3 size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph> +3 years of experience <br />
            SCSS, SASS, Bootstrap.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>Redux</ListTitle>
          <ListParagraph> +2 years of experience <br />
            ReduxToolkit, Redux-Saga, Redux-Thunk.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFramer size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>Framer</ListTitle>
          <ListParagraph> +2 years of experience <br />
            Framer Motion
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaGitSquare size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph> +3 years of experience <br />
            +70 repos on GitHub.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGooglecloud size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>Google Cloud Platform</ListTitle>
          <ListParagraph> +2 years of experience <br />
            BigQuery + Cloud Storage, Firebase.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMysql size="5rem" />
        <br />
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
          <ListParagraph> +4 years of experience <br />
            Postgrsql.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMongodb size="4rem" />
        <br />
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph> +3 years of experience <br />
            MERN, Meteor.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaAws size="5rem" />
        <br />
        <ListContainer>
          <ListTitle>Amazon Web Services</ListTitle>
          <ListParagraph> 1 year of experience <br />
            Lambda.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size="5rem" />
        <br />
        <ListContainer>
          <ListTitle>TypeScript</ListTitle>
          <ListParagraph> +2 years of experience <br />
            NEXT.js, React Native.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiStorybook size="5rem" />
        <br />
        <ListContainer>
          <ListTitle>StoryBook</ListTitle>
          <ListParagraph> +2 years of experience <br />
            Own Component Library.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size="5rem" />
        <br />
        <ListContainer>
          <ListTitle>TailwindCSS</ListTitle>
          <ListParagraph> +2 years of experience <br />
            TailwindUI.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
    <br />
  </Section>
);

export default Technologies;
