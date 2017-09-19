import "isomorphic-fetch";
import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverview from '../components/update-overview/update-overview';
import cookie from '../components/_helpers/cookie';

const updates = ({data, updatesData, fontsLoaded}) => {
	return (
		<Layout title="Hike One - Updates" fontsLoaded={fontsLoaded}>
			<main className="main js-main">
				<MenuBar color="white" />
				<article className="article">
					<PageHeader
						type="small"
						title={data.title}
						image={data.headerImage.url}>
					</PageHeader>
					<div className={`page-scrolling-content-small`}>
						<UpdateOverview>
							{ updatesData.map((item, index) => (
								<UpdateExtractSmall
									key={index}
									index={index}
									title={item.title}
									date={item.date}
									author={item.author.name}
									target={item.link}
									image={item.image.url}
									category={item.category.name}
									color={item.themeColor.hex} />
							))}
						</UpdateOverview>
					</div>
				</article>
				<Footer />
			</main>
		</Layout>
	);
};

updates.getInitialProps = async ({req}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fetchJson = (model) => fetch(`${baseUrl}/api/${model}`).then(res => res.json());
	const fetchAll = (models) => Promise.all(models.map(fetchJson));
	const [ data, updatesData ] = await fetchAll(['update-overview', 'update-extracts']);
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { data, updatesData, fontsLoaded };
};


export default updates;
