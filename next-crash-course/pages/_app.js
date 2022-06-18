import '../styles/globals.css'
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
	// console.log(Component);
	// console.log(pageProps)
	return (
		<div>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
		)

}

export default MyApp
