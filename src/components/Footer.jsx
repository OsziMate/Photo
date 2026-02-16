export default function Footer() {
  return (
    <>
      <h1 id="elolabcim">
        ÖR<span className="outline">ÖKÍ</span>T
        <span className="outline">SD</span> M
        <span className="outline">E</span>G!
      </h1>

      <table className="elolabtabla">
        <tr>
          <td>Instagram</td>
          <td><a className="kek" href="#rolunk">Rólunk</a></td>
          <td colSpan="2">Elérhetőség:</td>
        </tr>

        <tr>
          <td className="kek">Csapattagok instagramja</td>
          <td><a className="kek" href="#projektek">Projektek</a></td>
          <td colSpan="2">Szentendre</td>
        </tr>

        <tr>
          <td>SP</td>
          <td><a className="kek" href="#projektek">Projektek</a></td>
          <td colSpan="2" className="kek">Példaemail@gmail.com</td>
        </tr>

        <tr>
          <td>Krisz</td>
          <td><a className="kek" href="#kapcsolat">Kapcsolat</a></td>
          <td><a href="" className="zold">Terms of Use</a></td>
          <td><a href="" className="zold">Privacy Policy</a></td>
        </tr>

        <tr>
          <td>Oszi</td>
        </tr>
      </table>
    </>
  );
}
