import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center my-10">
      <Loader2 className="animate-spin" size={50} />
    </div>
  );
}
