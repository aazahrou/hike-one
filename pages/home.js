import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import HomeHero from '../components/home-hero/home-hero';
import ReadMore from '../components/read-more/read-more';
import TextCenter from '../components/text-center/text-center';

import Data from '../dummy-data/home/home.json';

class Home extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Home">
				<main className="main js-main">
					<Header color="black" />
					<article className="article-full-width">
						<HomeHero
								title={Data.heroHeading} 
								subtitle={Data.heroSubheading}
								heroImage={Data.heroImage} />
						<TextCenter
								classes="text-center-font-large text-center-spacing-small"
								text={Data.homeTextIntro} />
						<TextCenter
								classes="text-center-font-medium text-center-spacing-small"
								text={Data.homeTextStepTwo} />
						<CaseExtract 
								headerImage={Data.caseExtractHeaderImage}
								title={Data.caseExtractTitle}
								subtitle={Data.caseExtactSubtitle}
								type={Data.caseExtractType} />

						<TextCenter
								classes="text-center-font-medium text-center-spacing-small"
								text={Data.homeTextStepThree} />
						<Contact
								title={Data.contactTitle}
								button={Data.contactButton} />
						<ReadMore
							highlight={Data.readMore.highlight}
							links={Data.readMore.links} />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Home;
