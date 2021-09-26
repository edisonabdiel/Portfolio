import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>These are some of my most recent projects. They showcase a range of different development methods, styling techniques, APIs, stacks and data base set ups.</SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <br />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <CardInfo>{description}</CardInfo>
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => <Tag key={i} >{tag}</Tag>)}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
       </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
    <br />
  </Section>
);

export default Projects;