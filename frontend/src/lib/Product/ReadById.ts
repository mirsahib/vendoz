import { GetStaticProps } from "next";
import { ApiResponse } from "../types";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery{
    productslug:string,
}

const getStaticPaths = async () => {
	const res = await fetch(
		`${process.env.REACT_API_URL}/products?populate=*`,
		{
			headers: {
				Authorization: "Bearer " + process.env.REACT_API_TOKEN,
			},
		}
	);
    const products = await res.json() as ApiResponse
    const data = products.data
	const paths = products.data.map(item=>{
        const catagory = item.attributes.catagories?.data[0].attributes.title
        return {
            params:{
                productslug:item.id,
                catagory:catagory
            }
        }
    })

    return {
		paths,
		fallback: true,
	};
};

const getStaticProps:GetStaticProps = async (ctx)=>{
    const {productslug,catagory} = ctx.params as IParams
    const res = await fetch(
		`${process.env.REACT_API_URL}/products/${productslug}`,
		{
			headers: {
				Authorization: "Bearer " + process.env.REACT_API_TOKEN,
			},
		}
	);
    const product = await res.json()  as ApiResponse;
    
    return {
        props:{
          product
        }
      }
}

export { getStaticPaths,getStaticProps };
