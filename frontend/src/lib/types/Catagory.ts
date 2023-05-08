import { IMedia } from "./builtins/Media";
import { IProduct } from "./Product";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface ICatagory<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string | null;
      desc: string | null;
      img?: { data: IMedia[] };
      products?: { data: IProduct<ExtractNested<Populate, "products">>[] };
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
