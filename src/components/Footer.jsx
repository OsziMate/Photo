export default function Footer() {
  return (
    <>
      <h1 id="elolabcim">
        ÖR<span className="outline">ÖKÍ</span>T
        <span className="outline">SD</span> M
        <span className="outline">E</span>G!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-4/5 mx-auto text-center md:text-left">

        {/* Instagram */}
        <div className="md:order-1 order-2">
          <p className="kek mb-3">Instagram</p>
          <p>SP</p>
          <p>Krisz</p>
          <p>Oszi</p>
        </div>

        {/* Menü desktop only */}
        <div className="hidden md:block">
          <a href="#rolunk" className="kek block">Rólunk</a>
          <a href="#projektek" className="kek block">Projektek</a>
          <a href="#kapcsolat" className="kek block">Kapcsolat</a>
        </div>

        {/* Elérhetőség */}
        <div className="md:order-3 order-1">
          <p className="mb-2">Elérhetőség:</p>
          <p>Szentendre</p>
          <p className="kek">pelda@email.com</p>
        </div>

      </div>
    </>
  );
}
