import * as z from "zod";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

export const ChallengeSchema = z.object({
  challengeStart: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => {
      const startDate = new Date(value);
      startDate.setHours(0, 0, 0, 0);
      return startDate >= currentDate;
    }, "Tanggal mulai harus dari hari ini"),
  challengeEnd: z.string().min(1, { message: "Field tidak boleh kosong" }),
  challengeName: z.string().min(1, { message: "Field tidak boleh kosong" }),
  exp: z.number().min(1, { message: "Field tidak boleh kosong" }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `*maksimal 2MB dengan format PNG, JPG, JPEG`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "*format PNG, JPG, JPEG"
    )
    .optional()
    .or(z.literal("")),
  description: z
    .string({ required_error: "Field tidak boleh kosong" })
    .nullable(),
});
