var media = 0;
var lista = [59.213,
61.603,
64.843,
51.322,
23.803,
53.741,
21.773,
64.066,
65.534,
67.478,
68.299,
30.37,
26.15,
56.088,
54.835,
13.738,
37.282,
33.739,
13.147,
31.68,
41.89,
61.07,
59.573,
31.421,
64.627,
64.973,
63.158,
20.88,
51.466,
31.81,
30.83];
for (var i = 0;i < lista.length; i++) {
    media += lista[i];
}
media = media/lista.length;
var varianca = 0;
for (var i = 0;i < lista.length; i++) {
    varianca += (media - lista[i]) * (media - lista[i]);
}
varianca = varianca/lista.length;
Math.sqrt(varianca);
