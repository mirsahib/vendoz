import { MainLayout } from "@/components/Layout";
import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { Comme } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AuthProvider from "@/context/AuthContext";
config.autoAddCss = false;

// const comme = Comme({ subsets: ["latin"] ,display:'swap'});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AuthProvider>
				<MainLayout>
					<main >
						<Component {...pageProps} />
					</main>
				</MainLayout>
			</AuthProvider>
		</Provider>
	);
}
