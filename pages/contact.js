import '../styles/index.less';

import fetch from 'isomorphic-unfetch';
import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeader from '../components/page-header/page-header';
import ContactForm from '../components/contact-form/contact-form';
import VacancyOverview from '../components/vacancy-overview/vacancy-overview';
import OfficeOverview from '../components/office-overview/office-overview';
import OfficeCard from '../components/office-card/office-card';
import Footer from '../components/footer/footer';

let scrapeJobs;

if (!process.browser) {
	scrapeJobs = require('../lib/job-scraper/server');
} else {
	scrapeJobs = require('../lib/job-scraper/browser');
}

const Page = ({ contactPage, vacancyOverview, footer, vacancies }) => (
	<>
		<Head
			title={contactPage.seo.title}
			description={contactPage.seo.description}
			image={contactPage.seo.image}
			twitterCard={contactPage.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<PageHeader
				isSmall={true}
				title={contactPage.header.title}
				subtitle={contactPage.header.subtitle}
				image={contactPage.header.backgroundImage.url}
			/>

			<main className="contact-page page-scrolling-content-small">
				<div className="contact-details container">
					<h2>Contact us at</h2>
					<a className="contact-details__tel" href="tel:+31-202044577">
						+31 20 204 45 77
					</a>
					<a className="contact-details__mail" href="mailto:hello@hike.one">
						hello@hike.one
					</a>
				</div>

				<ContactForm form={contactPage.contactForm} showBody={false} singleForm={true} />

				<VacancyOverview overview={vacancyOverview} vacancies={vacancies} />

				<OfficeOverview header={contactPage.officesHeader}>
					{contactPage.office.map((item, index) => (
						<OfficeCard
							key={index}
							index={index}
							location={item.location}
							address={item.address}
							postcode={item.postcode}
							city={item.city}
							country={item.country}
							locationUrl={item.locationUrl}
							imageUrl={item.image.url}
						/>
					))}
				</OfficeOverview>
			</main>
		</div>

		<Footer form={footer.form} disableParallax />
	</>
);

Page.getInitialProps = withCacheControl(({ query, req }) => {
	const graphqlQuery = `{
		contactPage {
			seo {
				title
				description
				twitterCard
				image {
					url
					width
					height
				}
			}
			header {
				title
				subtitle
				backgroundImage { url }
			}

			contactForm {
				title
				thankYouMessage
				selectInputLabel
				forms {
					id
					title
					formspreeEndpoint
					submitButtonLabel
					emailMessageSubject

					formFields {
						id
						name
						label
						inputType
						required
					}
				}
			}
			officesHeader
			office {
				location
				address
				postcode
				city
				country
				locationUrl
				image { url }
			}
		}

		vacancyOverview {
			title
			tagline
			callToActionTitle
			callToActionUrl
		}

		footer {
			form {
				title
				description
				listId
				button
				hasShadow
				extraInputFields {
					label
					inputType
					required
				}
			}
		}
	}`;

	return Promise.all([
		fetchContent({ graphqlQuery, req }),
		fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
			.then(response => response.text())
			.then(scrapeJobs),
	]).then(([content, vacancies]) => ({
		...content,
		vacancies,
	}));
});

export default Page;
