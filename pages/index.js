import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Insta Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/*header*/}
			<Header />
			{/*feed*/}
			<Feed />
			{/*modal*/}
		</div>
	)
}
