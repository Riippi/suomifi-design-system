import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Button } from '../../components/ExampleComponents'
import ComponentDescription from '../../components/ComponentDescription'
import sideNavData from '../../config/sidenav/components'
import NoteBox from '../../components/NoteBox'
import Section from '../../components/Section'
import ComponentExample from '../../components/ComponentExample'

const components = [
  { id: 'primary', comp: Button },
  { id: 'tertiary', comp: Button.tertiary },
  {
    id: 'negative',
    comp: Button.negative,
    background: suomifiTheme.colors.secondaryColor
  },
  { id: 'secondary', comp: Button.secondary },
  {
    id: 'secondaryNoborder',
    comp: Button.secondaryNoborder,
    background: suomifiTheme.colors.white,
    border: '1px solid #C9CDCF'
  }
]

const disabledComponents = [
  { id: 'primary', comp: Button },
  { id: 'tertiary', comp: Button.tertiary },
  {
    id: 'negative',
    comp: Button.negative,
    background: suomifiTheme.colors.secondaryColor
  },
  { id: 'secondary', comp: Button.secondary },
  {
    id: 'secondaryNoborder',
    comp: Button.secondaryNoborder
  }
]

const clickCount = {}
const handleClick = (id: string, name: string, t: Function): void => {
  if (!clickCount[id]) {
    clickCount[id] = 0
  }
  document.getElementById(id).setAttribute(
    'aria-label',
    t('button.labelClicked', {
      name: name,
      count: ++clickCount[id]
    })
  )
}

const getExampleComp = (
  Comp: Function,
  id: string,
  label: string,
  props: object,
  t: Function
): JSX.Element => (
  <Comp
    key={id}
    id={id}
    aria-label={label}
    style={{ margin: '.5rem' }}
    {...props}
    onClick={() => handleClick(id, label, t)}>
    {label}
  </Comp>
)

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['button']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} description='' />
        <h1>{t('title')}</h1>

        <p>{t('intro')}</p>

        <h2>{t('common:component.usage')}</h2>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}

        <h2>{t('common:component.versions')}</h2>

        {components.map(item => (
          <ComponentDescription
            key={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}
            exampleFirst>
            <ComponentExample
              style={{
                background: item.background,
                border: item.border || 0
              }}>
              {[
                { id: item.id, label: t(`${item.id}.label`) },
                {
                  id: `${item.id}.disabled`,
                  label: t(`${item.id}.labelDisabled`),
                  props: { disabled: true }
                }
              ].map(example =>
                getExampleComp(
                  item.comp,
                  example.id,
                  example.label,
                  example.props,
                  t
                )
              )}
            </ComponentExample>
          </ComponentDescription>
        ))}

        <ComponentDescription
          title={t('withIcon.title')}
          description={t('withIcon.description')}
          exampleFirst>
          {components.map(item => (
            <ComponentExample
              key={item.id}
              style={{
                background: item.background,
                border: item.border || 0
              }}>
              {[
                {
                  id: `${item.id}.icon`,
                  label: t('button.labelIcon', {
                    name: t(`${item.id}.label`)
                  }),
                  props: { icon: 'login' }
                },
                {
                  id: `${item.id}.iconRight`,
                  label: t('button.labelIconRight', {
                    name: t(`${item.id}.label`)
                  }),
                  props: { iconRight: 'logout' }
                }
              ].map(example =>
                getExampleComp(
                  item.comp,
                  example.id,
                  example.label,
                  example.props,
                  t
                )
              )}
            </ComponentExample>
          ))}
        </ComponentDescription>

        <ComponentDescription
          title={t('disabled.title')}
          description={t('disabled.description')}
          exampleFirst>
          <ComponentExample>
            {disabledComponents.map(item => (
              <div
                key={item.id}
                style={{
                  margin: '.5rem',
                  background: item.background || 'none'
                }}>
                {getExampleComp(
                  item.comp,
                  `${item.id}.disabled.another`,
                  t(`${item.id}.labelDisabled`),
                  { disabled: true },
                  t
                )}
              </div>
            ))}
          </ComponentExample>
        </ComponentDescription>
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
