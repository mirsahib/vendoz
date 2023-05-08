import { IMedia } from "./builtins/Media";
import { ICatagory } from "./Catagory";
import { ISubCatagory } from "./SubCatagory";
import { ExtractNested } from "./builtins/ExtractNested";
import { ExtractFlat } from "./builtins/ExtractFlat";
import { RequiredBy } from "./builtins/RequiredBy";
export interface IProduct<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string | null;
      desc: string | null;
      img?: { data: IMedia | null };
      img2?: { data: IMedia | null };
      price: number | null;
      isNew: boolean | null;
      type: "normal" | "featured" | "trending" | null;
      catagories?: { data: ICatagory<ExtractNested<Populate, "catagories">>[] };
      sub_catagories?: {
        data: ISubCatagory<ExtractNested<Populate, "sub_catagories">>[];
      };
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
