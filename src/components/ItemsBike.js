import React, { useState } from "react";
import Button from "./Button";
import "../style/ItemsBike.css";

const ItemsBike = () => {
  const [selectedMarca, setSelectedMarca] = useState("");
  const [selectedModelo, setSelectedModelo] = useState("");
  const [selectedAnio, setSelectedAnio] = useState("");

  const modelosPorMarca = {
    honda: [
      "CBR1000RR",
      "CBR600RR",
      "CBR500R",
      "CBR250RR",
      "CBR150R",
      "CBR125R",
      "CB650R",
      "CB500F",
      "CB300R",
      "CB1000R",
      "CB1100",
      "CBR1100XX",
      "CRF1000L Africa Twin",
      "CRF1100L Africa Twin",
      "CRF250L",
      "CRF450L",
      "CRF250R",
      "CRF450R",
      "CB1100EX",
      "CB1100RS",
      "Rebel 1100",
      "Rebel 500",
      "Rebel 300",
      "CB125R",
      "CB300F",
      "CB500X",
      "CB650F",
      "CMX1100 Rebel",
      "CMX500 Rebel",
      "MSX125",
      "Grom",
      "CB125F",
      "CB125E",
      "PCX125",
      "PCX150",
      "Forza 125",
      "Forza 300",
      "Forza 750",
      "CB1100SF X11",
      "CB1300SF Super Four",
      "CTX1300",
      "NC750X",
      "NC750S",
      "VT1300CX Fury",
      "VT1300CR Stateline",
    ],
    yamaha: [
      "YZF-R1",
      "YZF-R6",
      "YZF-R3",
      "YZF-R15",
      "MT-15",
      "MT-03",
      "MT-07",
      "MT-09",
      "FZ25",
      "FZS-FI",
      "FZ16",
      "Fazer",
      "FZ150i",
      "FZ-S V3",
      "YBR 125",
      "XTZ 125",
      "XTZ 250",
      "XTZ 250 Ténéré",
      "XTZ 150",
      "XTZ 150 Crosser",
      "TMAX",
      "NMAX",
      "Cygnus Ray ZR",
      "Cygnus Alpha",
      "Fascino",
      "SZ-RR",
      "Saluto RX",
      "Fino",
      "Crypton",
      "BWS X125",
      "Tricity",
      "XMAX",
      "XSR 155",
      "Sniper 150",
      "Exciter 155",
      "Aerox 155",
      "NVX 155",
    ],
    suzuki: [
      "GSX-R1000",
      "GSX-R750",
      "GSX-R600",
      "GSX-S1000",
      "GSX-S750",
      "GSX-S125",
      "SV650",
      "V-Strom 1050",
      "V-Strom 650",
      "V-Strom 250",
      "GSX250R",
      "GSX150F",
      "Address 110",
      "Burgman 400",
      "Burgman 200",
      "Burgman 125",
      "GSX150",
      "Satria F150",
      "GSX-S150",
      "Raider J115 Fi",
      "Raider J150 Fi",
      "Skydrive Fi",
      "Smash Fi",
      "Shogun Axelo",
      "GSX150 Bandit",
      "DR-Z400S",
      "DR-Z400SM",
      "RM-Z450",
      "RM-Z250",
      "RM85",
      "TU250X",
      "GW250",
      "UX125",
      "UX110",
      "V-Storm 1000",
      "V-Storm 650",
      "V-Storm 250",
      "SV650X",
      "Gixxer 250",
      "Gixxer SF 250",
      "Gixxer 150",
      "Gixxer SF 150",
    ],
    kawasaki: [
      "Ninja H2",
      "Ninja H2 Carbon",
      "Ninja H2R",
      "Ninja H2 SX SE",
      "Ninja H2 SX",
      "Ninja H2 SX SE+",
      "Ninja ZX-14R",
      "Ninja ZX-10R",
      "Ninja ZX-10RR",
      "Ninja ZX-10R SE",
      "Ninja ZX-10R SE Performance",
      "Ninja ZX-6R",
      "Ninja 400",
      "Ninja 400 KRT Edition",
      "Z H2",
      "Z H2 SE",
      "Z H2 SE Performance",
      "Z H2 SX",
      "Z H2 SX SE",
      "Z H2 SX SE Performance",
      "Z1000",
      "Z900",
      "Z650",
      "Z400",
      "Versys 1000",
      "Versys 1000 SE",
      "Versys 650",
      "Versys-X 300",
      "W800",
      "W800 Street",
      "W800 Cafe",
      "Vulcan S",
      "Vulcan 900 Classic",
      "Vulcan 900 Custom",
      "Vulcan 1700 Vaquero",
      "Vulcan 1700 Voyager",
      "Z125 Pro",
      "KLX300R",
      "KLX230R",
      "KLX230",
      "KLX140R",
      "KLX140R L",
      "KLX140",
      "KLX110R",
      "KLX110",
      "KLX50",
    ],
    harley: [
      "Iron 1200",
      "Iron 883",
      "Forty-Eight",
      "Forty-Eight Special",
      "Street Bob",
      "Low Rider",
      "Low Rider S",
      "Softail Slim",
      "Fat Boy",
      "Fat Boy 30th Anniversary",
      "Fat Boy S",
      "Street Glide",
      "Street Glide Special",
      "Road Glide",
      "Road Glide Special",
      "Road King",
      "Road King Special",
      "Electra Glide Standard",
      "Ultra Limited",
      "CVO Limited",
      "Tri Glide Ultra",
      "Freewheeler",
      "Sportster S",
      "Pan America 1250",
      "Pan America 1250 Special",
      "Livewire",
    ],
    ktm: [
      "1290 Super Duke R",
      "1290 Super Duke RR",
      "890 Duke R",
      "790 Duke",
      "390 Duke",
      "RC 390",
      "RC 125",
      "Adventure 1290 Super Adventure R",
      "Adventure 1290 Super Adventure S",
      "Adventure 890 Adventure",
      "Adventure 390 Adventure",
      "690 SMC R",
      "690 Enduro R",
      "125 Duke",
      "125 Duke 2021",
    ],
    bmw: [
      "R 1250 GS",
      "R 1250 GS Adventure",
      "R 1250 R",
      "R 1250 RS",
      "F 850 GS",
      "F 850 GS Adventure",
      "F 750 GS",
      "S 1000 RR",
      "S 1000 R",
      "S 1000 XR",
      "G 310 R",
      "G 310 GS",
      "F 900 R",
      "F 900 XR",
      "R 18",
      "R 18 Classic",
      "R nineT",
      "R nineT Scrambler",
      "R nineT Urban G/S",
      "R nineT Pure",
      "R nineT Racer",
      "R nineT /5",
      "R nineT /5",
      "K 1600 GT",
      "K 1600 GTL",
      "K 1600 B",
      "K 1600 Grand America",
      "K 1600 Grand America",
    ],
    royal: [
      "Himalayan",
      "Classic 350",
      "Classic 350 Redditch",
      "Classic 500",
      "Classic 500 Stealth Black",
      "Classic 500 Chrome",
      "Bullet 350",
      "Bullet 350 ES",
      "Continental GT 650",
      "Interceptor 650",
      "Meteor 350",
      "Electra 350",
      "Thunderbird 350",
      "Bullet Trials 350",
      "Bullet Trials 500",
    ],
    triumph: [
      "Bonneville T100",
      "Bonneville T120",
      "Speed Twin",
      "Street Twin",
      "Scrambler 1200 XC",
      "Scrambler 1200 XE",
      "Street Scrambler",
      "Thruxton RS",
      "Rocket 3 R",
      "Rocket 3 GT",
      "Tiger 850 Sport",
      "Tiger 900 GT",
      "Tiger 900 GT Pro",
      "Tiger 900 Rally",
      "Tiger 900 Rally Pro",
      "Tiger 1200 XR",
      "Tiger 1200 XRT",
      "Tiger 1200 XRX",
      "Tiger 1200 XRT",
      "Tiger 1200 XCA",
      "Tiger 1200 XRT",
      "Tiger 1200 XRX",
      "Tiger 1200 XRT",
      "Tiger 1200 XCA",
      "Tiger Sport",
      "Scrambler 900",
      "Street Cup",
      "Street Scrambler",
      "Speed Triple RS",
      "Speed Triple S",
    ],
    ducati: [
      "Panigale V4",
      "Panigale V2",
      "Superleggera V4",
      "Diavel 1260",
      "Diavel 1260 S",
      "Multistrada V4",
      "Multistrada V4 S",
      "Multistrada V4 S Sport",
      "Multistrada 950",
      "Multistrada 950 S",
      "Scrambler Icon",
      "Scrambler Icon Dark",
      "Scrambler Full Throttle",
      "Scrambler Desert Sled",
      "Scrambler Nightshift",
      "Monster 821",
      "Monster 1200",
      "Monster 1200 S",
      "Streetfighter V4",
      "Streetfighter V4 S",
      "Hypermotard 950",
      "Hypermotard 950 SP",
      "Panigale V4 R",
      "Panigale V4 SP",
      "SuperSport 950",
      "SuperSport 950 S",
      "XDiavel",
      "XDiavel S",
    ],
    cfmoto: [
      "300SR",
      "400NK",
      "650NK",
      "650NK SP",
      "650MT",
      "650GT",
      "700CL-X",
      "700CL-X Heritage",
      "700CL-X Sport",
      "700CL-X Adventure",
      "650GT-X",
      "ZFORCE 1000 Sport",
      "ZFORCE 950 Sport",
      "ZFORCE 1000",
      "ZFORCE 1000 EPS",
      "ZFORCE 800 EX EPS",
      "ZFORCE 1000 SSV",
      "ZFORCE 1000 EPS SSV",
      "ZFORCE 1000 TRAIL",
      "ZFORCE 1000 EPS TRAIL",
      "ZFORCE 800 EX EPS TRAIL",
      "UForce 1000 EPS",
      "UForce 1000 EPS LX",
      "UForce 1000 EPS LX HUNTER",
    ],
    benelli: [
      "Leoncino 500",
      "TRK 502",
      "TRK 502X",
      "Imperiale 400",
      "302S",
      "752S",
      "600N",
      "TNT 135",
      "302R",
      "302R STD",
      "TRK 251",
      "Leoncino 250",
      "Leoncino 250 Trail",
      "TNT 25",
      "TNT 25 R",
    ],
    bajaj: [
      "Pulsar NS200",
      "Pulsar NS160",
      "Pulsar RS200",
      "Pulsar 220F",
      "Pulsar 180F",
      "Pulsar 150 Twin Disc",
      "Pulsar 150",
      "Pulsar 125",
      "Pulsar NS125",
      "Pulsar 125 Split Seat",
      "Dominar 400",
      "Platina 110",
      "Platina 110 H-Gear",
      "CT 100",
      "CT 110",
      "Discover 125 Disc",
      "Discover 125 Drum",
    ],
    husqvarna: [
      "Svartpilen 401",
      "Svartpilen 125",
      "Vitpilen 401",
      "Vitpilen 125",
      "Svartpilen 200",
      "Vitpilen 200",
      "Svartpilen 401",
      "Svartpilen 701",
      "Norden 901 Concept",
      "TE 300i",
      "TE 250i",
      "TE 150i",
      "FE 501",
      "FE 450",
      "FE 350",
      "FE 350s",
      "FE 250",
      "FX 450",
      "FX 350",
      "701 Supermoto",
      "701 Enduro LR",
    ],
    mvagusta: [
      "Brutale 1000 RR",
      "Brutale 1000 Serie Oro",
      "Brutale 800 RR SCS",
      "Brutale 800 RR America",
      "Brutale 800 Rosso",
      "Brutale 800",
      "Dragster 800 RR",
      "Dragster 800 RR America",
      "Dragster 800 Rosso",
      "Dragster 800",
      "F3 800 RC",
      "F3 800 Rosso",
      "F3 800",
      "Turismo Veloce RC SCS",
      "Turismo Veloce Lusso SCS",
      "Turismo Veloce Lusso Rosso",
      "Turismo Veloce Lusso",
      "Rush 1000",
      "Rush 1000 Limited Edition",
      "Superveloce 800 Serie Oro",
      "Superveloce 800",
      "Superveloce 800 Rosso",
    ],
    kymco: [
      "AK 550",
      "AK 550 SE",
      "Downtown 350i",
      "Like 150i",
      "People S 150i",
      "Xciting S 400i",
      "Xciting S 400i Special Edition",
      "Xciting S 400i S Standard Edition",
      "Xciting S 400i S Premium Edition",
      "Xciting S 400i S Premium Plus Edition",
      "Agility 16+ 200i",
      "Agility 16+ 150i",
      "Agility 16+ 125i",
      "Agility 16+ 50i",
      "Agility 16+ Carry 125i",
      "Agility 16+ Carry 50i",
    ],
    italika: [
      "Vort-X 650",
      "Vort-X 300",
      "Vort-X 200",
      "Vort-X 125",
      "Vort-X 100",
      "Vort-X 70",
      "FT 125",
      "FT 150",
      "FT 150 GT",
      "DS 125",
      "DS 150",
      "DS 150 GT",
      "XT 110",
      "XT 150",
      "XT 150S",
      "AT 110",
      "AT 110 RT",
      "AT 125",
      "AT 125 RT",
      "ST 125",
      "ST 150",
      "ST 150 GT",
      "DSR 250",
      "FTX 150",
      "FTX 200",
    ],
    tvs: [
      "Apache RTR 200 4V",
      "Apache RTR 160 4V",
      "Apache RTR 160 4V Disc",
      "Apache RTR 160 4V Drum",
      "Apache RTR 160 2V Disc",
      "Apache RTR 160 2V Drum",
      "Apache RTR 180",
      "Apache RTR 160",
      "Apache RTR 150",
      "Apache RR 310",
      "NTorq 125",
      "NTorq 125 Race Edition",
      "NTorq 125 Super Squad Edition",
      "Star City Plus",
      "Star City Plus Kargil Edition",
      "Star City Plus Dual Tone",
      "Star City Plus Mono Tone",
      "Star City Plus Titanium Edition",
      "XL 100",
      "XL 100 Comfort",
      "XL 100 Heavy Duty",
      "XL 100 Heavy Duty i-TOUCHstart",
      "iQube Electric",
    ],
    akt: [
      "AK 125 SL",
      "AK 150 NE",
      "AK 125 TT",
      "AK 125 NKD",
      "AK 150 R",
      "AK 125 N",
      "AK 150 TT",
      "AK 150 R3",
      "AK 125 NS",
      "AK 150 EVO",
      "AK 125 R",
      "AK 150 TT3",
      "AK 125 NE",
      "AK 150 TR",
      "AK 150 R2",
      "AK 125 TT2",
      "AK 125 E2",
      "AK 150 EVO R3",
      "AK 150 PLUS",
      "AK 125 TT4",
    ],
  };

  const handleClick = () => {
    alert(
      `Escogiste una moto  ${selectedMarca} modelo ${selectedModelo} del año  ${selectedAnio}`
    );
  };

  const handleMarcaChange = (e) => {
    const marcaSeleccionada = e.target.value;
    setSelectedMarca(marcaSeleccionada);

    // Si la marca seleccionada tiene modelos, selecciona el primero automáticamente
    if (modelosPorMarca[marcaSeleccionada]) {
      setSelectedModelo(modelosPorMarca[marcaSeleccionada][0]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los valores de los elementos
    console.log("Marca:", selectedMarca);
    console.log("Modelo:", selectedModelo);
    console.log("Año:", selectedAnio);
  };

  return (
    <div className="items-bike">
      <div className="parrafo">
        <h1>¡Tu aliado financiero sobre dos ruedas! Con nuestra plataforma inteligente, los motociclistas pueden calcular y controlar su presupuesto de gastos de forma sencilla y divertida. ¡Deja que tus finanzas vuelen libremente mientras tú disfrutas de la carretera! ¡Tu moto, tu presupuesto, tu libertad!</h1>
      </div>
      <h2 className="title">Busca tu moto</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="input-container">
          <label>Marca</label>
          <select
            value={selectedMarca}
            onChange={handleMarcaChange}
            className="select-style"
          >
            <option value="">Selecciona...</option>
            <option value="honda">Honda</option>
            <option value="yamaha">Yamaha</option>
            <option value="suzuki">Suzuki</option>
            <option value="kawasaki">Kawasaki</option>
            <option value="harley">Harley-Davidson</option>
            <option value="ktm">KTM</option>
            <option value="bmw">BMW</option>
            <option value="royal">Royal Enfield</option>
            <option value="triumph">Triumph</option>
            <option value="ducati">Ducati</option>
            <option value="cfmoto">CFMOTO</option>
            <option value="benelli">Benelli</option>
            <option value="bajaj">Bajaj</option>
            <option value="husqvarna">Husqvarna</option>
            <option value="mvagusta">MV Agusta</option>
            <option value="kymco">Kymco</option>
            <option value="italika">Italika</option>
            <option value="tvs">TVS</option>
            <option value="akt">AKT</option>
          </select>
        </div>

        <div className="input-container">
          <label>Modelo</label>
          <select
            value={selectedModelo}
            onChange={(e) => setSelectedModelo(e.target.value)}
            className="select-style"
            disabled={!selectedMarca}
          >
            <option value="">Selecciona...</option>
            {selectedMarca &&
              modelosPorMarca[selectedMarca].map((modelo, index) => (
                <option key={index} value={modelo}>
                  {modelo}
                </option>
              ))}
          </select>
        </div>

        <div className="input-container">
          <label>Año</label>
          <select
            value={selectedAnio}
            onChange={(e) => setSelectedAnio(e.target.value)}
            className="select-style"
          >
            <option value="">Selecciona...</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <Button text="Buscar" onClick={handleClick} />
      </form>
    </div>
  );
};

export default ItemsBike;
