# Geoffre

se crea instancia de partida con 10 localizaciones (cada localizacion tiene coordenadas)
el usuario ingresa las coordenadas de cada localizacion
se calcula la distancia entre coordenadas de localizacion y coordenadas dadas x el jugador

como se calcula?
algoritmo por cercania entre user.coords y localizacion.coords:
EJEMPLO:
`function haversineDistance(coords1, coords2){`
`const R = 6371; // Radio de la Tierra en kilómetros`
`const lat1 = coords1[0] * (Math.PI / 180); // Convertir a radianes`
`const lon1 = coords1[1] * (Math.PI / 180);`
`const lat2 = coords2[0] * (Math.PI / 180);`
`const lon2 = coords2[1] * (Math.PI / 180);`

`const dLat = lat2 - lat1;`
`const dLon = lon2 - lon1;`

`const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);`

`const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));`

`const distance = R * c;`

`return distance; // Retorna la distancia en kilómetros`
`}`

`// Coordenadas de ejemplo`
`const localizacion1 = [-34.60927179181695, -58.52496231370541];`
`const userCoords = [-34.655636, -58.445317];`

`const distancia = haversineDistance(localizacion1, userCoords);`

`console.log`(`La distancia es ${distancia.toFixed(2)} km`);

con la distancia dada, se procede a dar puntaje:
si la distancia es entre 0km y 0.1km el puntaje es 20mil
si la distancia es entre 0.1km y 0.3km el puntaje es 18mil
si la distancia es entre 0.3km y 1km el puntaje es 17mil
si la distancia es entre 1km y 2km el puntaje es 16mil
si la distancia es entre 2km y 5km el puntaje es 15mil
si la distancia es entre 5km y 10km el puntaje es 10mil
si la distancia es entre 10km y 50km el puntaje es 8mil
si la distancia es entre 50km y 100km el puntaje es 5mil
si la distancia es entre 100km y 200km el puntaje es 3mil
si la distancia es entre 200km y 500km el puntaje es 1mil
si la distancia es entre 500km y 1000km el puntaje es 0.7mil
si la distancia es entre 1000km y 2000km el puntaje es 0.2mil
si la distancia es mayor a 2000km el puntaje es 0mil

ese puntaje se almacena en el score de la partida y al finalizar la partida, se divide por 10 para obtener el puntaje final que sera almacenado en el usuario.puntaje
