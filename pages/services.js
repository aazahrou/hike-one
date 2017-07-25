import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import ServicesIntro from '../components/services-intro/services-intro';
import ServicesOverview from '../components/services-overview/services-overview';
import CTABlock from '../components/cta-block/cta-block';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import Data from '../data/current/services/services.json';

class Services extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Services">
				<main className="main js-main">
					<MenuBar />
					<article className="article">
						<PageHeader
							title="We help you build great digital products using human-centered design methods"
							subtitle="Our services"
							heroImage="static/images/service-header.jpg"
						/>

						<ServicesIntro text={Data.introText} />
						<ServicesOverview title={Data.overviewTitle} items={Data.overviewItems} />
						<Contact
							parallaxLayerFront={<ContactShapes.FrontLayer1 />}
							title={Data.contactTitle} button={Data.contactButton} />
					</article>
					<CTABlock title={Data.callToActionBlockTitle} button={Data.callToActionBlockButton} image="static/images/img-team.jpg" />
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Services;
