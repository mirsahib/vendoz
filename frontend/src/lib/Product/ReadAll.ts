import {IProduct} from '@/lib/types'

interface ApiResponse {
    data:IProduct[];
    meta:{
        pagination:{
            page:number,
            pageSize:number
            pageCount:number
            total:number
        }
    }
}

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
		const products = await res.json() as ApiResponse;
        
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
