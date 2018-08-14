import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import OfficeOverview from '../components/office-overview/office-overview';
import OfficeCard from '../components/office-card/office-card';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';
import PageHeader from '../components/page-header/page-header';
import ContactForm from '../components/contact-form/contact-form';

const formTitle = 'Lets talk about...'
const dropwDownTitle = 'Choose one'
const forms = [{ label: 'Just saying Hi', formType: 'personal'}, {label: 'Working at Hike One', formType: 'job-application'}, {label: 'Doing a project together', formType: 'company' }]
const dropdownArray = forms.map(item => item.label)

const dropdDownOptions = {
	formTitle,
	dropwDownTitle,
	forms
}

const justSayingHi = {
	label: 'Just saying Hi',
	fields: [{
		label: 'My name is',
		inputType: 'text',
		placeholder: 'Your name',
	},
	{
		label: 'My email is',
		inputType: 'email',
		placeholder: 'Your email'
	},
	{
		label: 'My message',
		inputType: 'textarea',
		placeholder: 'Your message here'
	}]
}
const projectTogether = {
	label: 'Doing a project together',
	fields: [{
		label: 'My name is',
		inputType: 'text',
		placeholder: 'Your name',
	},
	{
		label: 'My company is',
		inputType: 'text',
		placeholder: 'Your company name'
	},
	{
		label: 'My email is',
		inputType: 'email',
		placeholder: 'Your email'
	},
	{
		label: 'My phone number is',
		inputType: 'text',
		placeholder: 'Your phone number'
	},
	{
		label: 'My message',
		inputType: 'textarea',
		placeholder: 'Your message here'
	}]
}

const Contact = ({Data, fontsLoaded, fullUrl}) => (
	<Layout title="Hike One - Contact"
			fontsLoaded={fontsLoaded}
			seo={Data.seo}
			url={fullUrl} >
		<main className="main js-main" >
			<MenuBar color="white" />
			<article className="article">
				<PageHeader
					isSmall={true}
					title={Data.header.title}
					subtitle={Data.header.subtitle}
					image={Data.header.backgroundImage.url}/>

				<div className={`page-scrolling-content-small`}>
					<TextCenter
						classes={`text-center-font-large`}
						text={Data.content}>
						<TextCenterShapes.variation2Back position="back" />
					</TextCenter>

					<ContactForm dropDownOptions={dropdDownOptions} forms={forms} />

					<OfficeOverview header={Data.officesHeader}>
						{ Data.office.map((item, index) => (
							<OfficeCard
								key={index}
								index={index}
								location={item.location}
								address={item.address}
								postcode={item.postcode}
								city={item.city}
								country={item.country}
								locationUrl={item.locationUrl}
								imageUrl={item.image.url} />
						))}
					</OfficeOverview>
				</div>
			</article>

			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl} />
		</main>
	</Layout>
);


Contact.getInitialProps = async ({req, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const Data = await fetch(`${baseUrl}/api/contact`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {Data, fontsLoaded, fullUrl};
};

export default Contact;
