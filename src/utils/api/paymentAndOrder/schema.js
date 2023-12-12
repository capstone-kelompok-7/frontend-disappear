import * as z from "zod";

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

export const OrderSchema = z.object({
  orderDate: z
    .string()
    .min(1, { message: "Field tidak boleh kosong" })
    .refine((value) => {
      const startDate = new Date(value);
      startDate.setHours(0, 0, 0, 0);
      return startDate >= currentDate;
    }, "Tanggal mulai harus dari hari ini"),
  statusOrder: z.string().min(1, { message: "Field tidak boleh kosong" }),
  extraInfo: z.string().min(1, { message: "Field tidak boleh kosong" }),
});
