import { faker } from '@faker-js/faker'
export const generateSeedData = async (strapi: Strapi.Strapi) => {
    const product = {
        title: faker.commerce.productName(),
        desc: faker.commerce.productDescription(),
        imgUrl:faker.image.urlLoremFlickr({category:"food"}),
        price: faker.commerce.price(),
        catagories: [1],
        sub_catagories: [1],
        type:"featured",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        publishedAt: new Date().getTime(),
    }
    const sub_catagory = {
        title:faker.commerce.productAdjective(),
        publishedAt: new Date().getTime(),
    }
    const catagory = {
        title:faker.commerce.department(),
        desc:faker.commerce.productDescription(),
        publishedAt: new Date().getTime(),
    }
    try {
        
        const cat = strapi.entityService.create('api::catagory.catagory',{
            data:catagory
        })
        const sub_cat = strapi.entityService.create('api::sub-catagory.sub-catagory',{
            data:sub_catagory
        })
        
        const entry = await Promise.all([cat,sub_cat]).then(val=>console.log(val))
        console.log("🚀 ~ file: index.ts:33 ~ generateSeedData ~ entry:", entry)
        const prod = await strapi.entityService.create('api::product.product', {
            data: product,
        });
        console.log("🚀 ~ file: index.ts:38 ~ generateSeedData ~ prod:", prod)
    } catch (error) {
        console.log("🚀 ~ file: index.ts:40 ~ bootstrap ~ error:", error)
    }
}