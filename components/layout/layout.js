import Head from 'next/head'

export default ({ children, title = 'Hike One' }) => (
	<div>
		<Head>
			<title>{ title }</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />
			<meta name="description" content="Hike One" />
			<meta name="msapplication-TileColor" content="" />
			<meta name="msapplication-TileImage" content="/static/icons/mstile-150x150.png" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			<meta name="apple-mobile-web-app-title" content="Hike One" />
			<meta name="application-name" content="Hike One" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="theme-color" content="" />
			<link rel="apple-touch-icon" sizes="180x180" href="../static/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" sizes="32x32" />
			<link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" sizes="16x16" />
			<link rel="manifest" href="/static/manifest.json" />
			<link rel="stylesheet" href="/static/styles/index.css" />
		</Head>

		{ children }
	</div>
)
