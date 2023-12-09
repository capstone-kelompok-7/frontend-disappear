import * as z from "zod";

export const participantSchema = z.object({
  status: z.string().min(1, { message: "Field tidak boleh kosong" }),
});
