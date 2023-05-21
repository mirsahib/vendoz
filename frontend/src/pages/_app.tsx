import { MainLayout } from "@/components/Layout";
import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Comme } from "next/font/google";

const comme = Comme({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<MainLayout>
				<main className={comme.className}>
					<Component {...pageProps} />
				</main>
			</MainLayout>
		</Provider>
	);
}
