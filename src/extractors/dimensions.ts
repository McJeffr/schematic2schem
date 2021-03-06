import { NBT, Tags } from "prismarine-nbt";
import { TagType } from "../types/tag-type";

export interface Dimensions {
  length: number;
  width: number;
  height: number;
}

const extractDimensions = (nbt: NBT): Dimensions => {
  if (!nbt.value["Length"]) throw new Error("NBT is missing 'Length' tag");
  if (!nbt.value["Height"]) throw new Error("NBT is missing 'Height' tag");
  if (!nbt.value["Width"]) throw new Error("NBT is missing 'Width' tag");

  const length: number = (nbt.value["Length"] as Tags[TagType.Short]).value;
  const height: number = (nbt.value["Height"] as Tags[TagType.Short]).value;
  const width: number = (nbt.value["Width"] as Tags[TagType.Short]).value;

  return { width, height, length };
};

export default extractDimensions;
