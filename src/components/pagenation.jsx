export default function PageNation() {
  return (
    <div className="flex justify-end items-center mt-4">
      <button className="join-item btn btn-outline">&lt; Sebelumnya</button>
      <button className="hover:bg-primary-green hover:text-white p-3">1</button>
      <button className="hover:bg-primary-green hover:text-white p-3">2</button>
      <button className="hover:bg-primary-green hover:text-white p-3">3</button>
      <button className="join-item btn btn-outline">Selanjutnya &gt;</button>
    </div>
  );
}
