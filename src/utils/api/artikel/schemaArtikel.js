import * as z from "zod";

const MAX_FILE_SIZE = 200000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const artikelSchema = z.object({
  title: z.string().min(1, { message: "Field tidak boleh kosong" }),
  photo: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `maksimal 2MB dengan format PNG, JPG, JPEG.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  content: z.string().min(1, { message: "Field tidak boleh kosong" }),
});
