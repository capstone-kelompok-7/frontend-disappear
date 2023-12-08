import * as z from "zod";

const MAX_FILE_SIZE = 200000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const participantSchema = z.object({
  usernameIg: z.string().min(1, { message: "Field tidak boleh kosong" }),
  exp: z.number().min(1, { message: "Field tidak boleh kosong" }),
  berpartisipasi: z.string().min(1, { message: "Field tidak boleh kosong" }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `*maksimal 2MB dengan format PNG, JPG, JPEG`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "*format PNG, JPG, JPEG"
    ),
  status: z.string().min(1, { message: "Field tidak boleh kosong" }),
});
