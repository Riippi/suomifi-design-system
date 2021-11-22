import React from 'react';

import singleSelectContent from '../../../locale/fi/singleselect.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { SingleSelect } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
const tools = [
  {
    name: 'Ammattiliikenne',
    labelText: 'Ammattiliikenne',
    uniqueItemId: 'jh2435626',
  },
  {
    name: 'Ansiotulot',
    labelText: 'Ansiotulot',
    uniqueItemId: 'h9823523',
  },
  {
    name: 'Asiakirja-_ja_tietopyynnöt',
    labelText: 'Asiakirja- ja tietopyynnöt',
    uniqueItemId: 'sh908293482',
  },
  {
    name: 'asiakkuuden_hallinta',
    labelText: 'Asiakkuuden hallinta',
    uniqueItemId: 's82502335',
  },
  {
    name: 'asuminen_ja_rakentaminen',
    labelText: 'Asuminen ja rakentaminen',
    disabled: true,
    uniqueItemId: 'ps9081231',
  },
  {
    name: 'asunto_osakkeet',
    labelText: 'Shovel',
    uniqueItemId: 'Asunto-osakkeet',
  },
];

const Page = (): JSX.Element => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={singleSelectContent.title} />
      <Heading variant="h1">{singleSelectContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{singleSelectContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <SingleSelect
            labelText="Valitse asiakategoria"
            hintText="Voit rajata tuloksia kirjoittamalla kenttään."
            clearButtonLabel="Poista valinta"
            items={tools}
            visualPlaceholder="Kirjoita asiakategorian nimi"
            noItemsText="Haku valinnalla ei löytynyt tuloksia"
            ariaOptionsAvailableText="Valinnat ovat saatavilla"
          />
        </ComponentExample>
      </ComponentDescription>

      <NoteBox
        title={singleSelectContent['note.title']}
        items={singleSelectContent['note.items']}
      />

      {singleSelectContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
    </Layout>
  );
};

export default Page;
