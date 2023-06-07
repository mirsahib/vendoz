import { faker } from '@faker-js/faker'
export const generateSeedData = async (strapi: Strapi.Strapi) => {
    const product = {
        title: faker.commerce.productName(),
        desc: faker.commerce.productDescription(),
        imgUrl:faker.image.urlLoremFlickr({category:"food"}),
        price: faker.commerce.price(),
        catagories: [1, 2],
        sub_catagories: [5, 4],
        type:"featured",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        publishedAt: new Date().getTime(),
    }
    try {
        const entry = await strapi.entityService.create('api::product.product', {
            data: product,
        });
    } catch (error) {
        console.log("🚀 ~ file: index.ts:40 ~ bootstrap ~ error:", error)
    }
}