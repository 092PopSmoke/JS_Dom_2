function CelsTilFah(celsius) 
{
  const cTemperatur = celsius;
  const CelsTilFah = cTemperatur * 9 / 5 + 32;
  const message = `${cTemperatur}\xB0C is ${CelsTilFah} \xB0F.`;
    document.write(message);
}

function FahrenTilCel(fahrenheit) 
{
  const fTemperatur = fahrenheit;
  const FahrenTilCel = (fTemperatur - 32) * 5 / 9;
  const message = `${fTemperatur}\xB0F is ${FahrenTilCel}\xB0C.`;
    document.write(message);
} 
CelsTilFah(50);
FahrenTilCel(35);

// Du kan endre verdi for å konvertere ulike temperaturer

// fikk litt hjelp fra w3resource