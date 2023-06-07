import { generateSeedData } from "./_seed";
import { ApiProductProduct } from "../schemas";
import { faker } from "@faker-js/faker";
type ProductType = ApiProductProduct["attributes"]

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Strapi.Strapi }) {
    //await generateSeedData(strapi)
    
  },
};
 