//Funcao que calcula a distancia em KMs
function calcDistancia(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converter graus para radiano
function toRad(Value) 
{
    return Value * Math.PI / 180;
}


function CalcularDespesa(data) {


  let jornalistas =  (formData.get('numJornalista'));
  let distancia = 0.5 * (formData.get('complexityLevel'));
  let risco = 100 * (formData.get('riskLevel'));

  let total = jornalistas * risco + distancia;

  return total;
}