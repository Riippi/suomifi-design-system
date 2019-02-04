import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <NamespacesConsumer ns={['home']}>
    {t => (
      <Layout>
        <SEO title={t('title')} keywords={[`gatsby`, `application`, `react`]} />
        <h1>{t('title')}</h1>
      </Layout>
    )}
  </NamespacesConsumer>
)

export default withI18next()(IndexPage)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
