import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/info';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section, { Props as SectionProps } from 'components/Section';

const Page = (): JSX.Element => (
  <Translation ns={['info']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('info.title')} />
        <Heading variant="h1">{t('info.title')}</Heading>

        <Paragraph variant="lead">
          <Text variant="lead">{t('intro')}</Text>
        </Paragraph>

        {t<SectionProps[]>('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}
      </Layout>
    )}
  </Translation>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
