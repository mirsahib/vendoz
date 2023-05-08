

const getStaticProps = async () => {
	try {
		const res = await fetch(
			`${process.env.REACT_API_URL}/products?populate=*`,
			{
				headers: {
					Authorization: "Bearer " + process.env.REACT_API_TOKEN,
				},
			}
		);
		const products= await res.json();
		return {
			props: {
				products,
			},
		};
	} catch (error) {
        return {notFound: true,error: error}
    }
};

export { getStaticProps };
