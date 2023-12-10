import * as z from "zod";

const MAX_FILE_SIZE = 200000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const CarouselSchema = z.object({
  carouselName: z.string().min(1, { message: "Field tidak boleh kosong" }),
  image: z
    .any()
    .refine(
      (files) => files?.size <= MAX_FILE_SIZE,
      `*maksimal 2MB dengan format PNG, JPG, JPEG`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "*format PNG, JPG, JPEG"
    )
    .optional()
    .or(z.literal("")),
});
