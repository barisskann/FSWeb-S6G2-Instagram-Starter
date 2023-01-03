/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";
import sahteVeri from "./sahte-veri";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gönderi, setGonderi] = useState(sahteVeri);
  const [arama, setArama] = useState("");

  const gonderiyiBegen = (gonderiIxD) => {
    setGonderi(
      gönderi.map((item) => {
        if (item.id === gonderiIxD) {
          item.likes++;
        }
        return item;
      })
    );
  };
  function filter(arama) {
    const render = sahteVeri.filter((item) => item.username.includes(arama))
    setGonderi(render)
  }
  return (
    <div className="App">
      <AramaÇubuğu
        gönderi={gönderi}
        setArama={setArama}
        arama={arama}
        setGonderi={setGonderi}
        filter={filter}
      />
      <Gönderiler gonderiler={gönderi} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};
export default App;
