import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
	return (
		<div className = "bg-gray-50 red-500 h-screen overflow-y-scroll scrollbar-hide">
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
