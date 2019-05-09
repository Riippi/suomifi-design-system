import React, { CSSProperties } from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ComponentDescription from '../../components/ComponentDescription'
import sideNavData from '../../config/sidenav/styles'
import NoteBox from '../../components/NoteBox'
import Section from '../../components/Section'
import ComponentExample from '../../components/ComponentExample'

const colors = Object.keys(suomifiTheme.colors)
  .map(key => ({
    [key]: { name: key, value: suomifiTheme.colors[key], border: 'none' }
  }))
  .reduce((obj, item) => ({ ...obj, ...item }), {})

const borderForLightColor = `1px solid ${suomifiTheme.colors.depthLight13}`

colors.whiteBase = { ...colors.whiteBase, border: borderForLightColor }
colors.highlightLight53 = {
  ...colors.highlightLight53,
  border: borderForLightColor
}

const colorCategories = [
  {
    id: 'textColors',
    colors: [colors.blackBase, colors.depthBase, colors.depthDark27]
  },
  { id: 'brandColors', colors: [colors.brandBase] },
  {
    id: 'controlColors',
    colors: [
      colors.highlightBase,
      colors.highlightLight4,
      colors.highlightLight45,
      colors.highlightLight50,
      colors.highlightLight53,
      colors.highlightDark9,
      colors.depthBase,
      colors.depthDark27,
      colors.accentBase,
      colors.depthSecondary
    ]
  },
  {
    id: 'iconColors',
    colors: [colors.accentBase, colors.depthBase, colors.depthDark27]
  },
  {
    id: 'backgroundColors',
    colors: [
      colors.whiteBase,
      colors.depthLight30,
      colors.depthLight13,
      colors.highlightLight45,
      colors.highlightLight50,
      colors.highlightLight53,
      colors.depthSecondary
    ]
  },
  {
    id: 'trafficColors',
    colors: [
      colors.successBase,
      colors.warningBase,
      colors.alertBase,
      colors.warningLight47
    ]
  },
  {
    id: 'accentColors',
    colors: [colors.accentSecondary, colors.accentSecondaryLight40]
  }
]

const getExampleColor = (
  id: string,
  name: string,
  value: string,
  label: string,
  style?: CSSProperties
): JSX.Element => (
  <div key={id} style={{ margin: '.5rem 2rem .5rem 0' }}>
    <div
      style={{
        width: '10rem',
        height: '3rem',
        marginBottom: '1rem',
        background: value,
        ...style
      }}
    />
    <div style={{ fontSize: '.8rem' }}>{label}</div>
    <div style={{ fontSize: '.8rem' }}>{value}</div>
    <div style={{ fontSize: '.8rem' }}>{name}</div>
  </div>
)

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['colors']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <h1>{t('title')}</h1>

        <p>{t('intro')}</p>

        <h2>{t('usage')}</h2>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}

        <h2>{t('primaryColors.title')}</h2>

        {colorCategories.map(item => (
          <ComponentDescription
            key={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}
            exampleFirst={false}
            noCode>
            <ComponentExample
              style={{
                padding: 0,
                justifyContent: 'flex-start',
                background: 'none'
              }}>
              {item.colors.map((color, index) =>
                getExampleColor(
                  `${item.id}.${index}`,
                  color.name,
                  color.value,
                  t(`${color.name}.label`),
                  { border: color.border }
                )
              )}
            </ComponentExample>
          </ComponentDescription>
        ))}
      </Layout>
    )}
  </NamespacesConsumer>
)

export default withI18next()(Page)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
