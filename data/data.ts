export const potenciaPanel = 0.66;

export const numMaxPaneles = 566 / potenciaPanel;

export const valores = [
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[5.3000,	4.5050,	3.1535,	2.9958,	3.3553,	3.1205,	3.7384,	4.20],
[5.3000,	4.5050,	3.1535,	2.9958,	3.3553,	3.1205,	3.7384,	4.20],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.20],
[4.3100	,3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.20],
[4.0100,	3.4085,	2.3860,	2.2667,	2.5387,	2.3609,	2.8284,	4.80],
[4.3000,	3.6550,	2.5585,	2.4306,	2.7222,	2.5317,	3.0330,	4.00],
[4.0100,	3.4085,	2.3860,	2.2667,	2.5387,	2.3609,	2.8284,	4.80],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.80],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.80],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.80],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.0100,	3.4085,	2.3860,	2.2667,	2.5387,	2.3609,	2.8284,	4.80],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[5.3000,	4.5050,	3.1535,	2.9958,	3.3553,	3.1205,	3.7384,	4.90],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
[5.3000,	4.5050,	3.1535,	2.9958,	3.3553,	3.1205,	3.7384,	4.90],
[4.3100,	3.6635,	2.5645,	2.4362,	2.7286,	2.5376,	3.0401,	4.00],
];

export const estados = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Ciudad de México",
  "Durango",
  "México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco","Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

export const columnas = [
  "PDBT",
  "GDBT",
  "GDMTH",
  "GDMTO",
  "DIS",
  "DIST",
  "Promedio",
  "Factor de Generación",
];

export const incrementoanual = [
  {
    fee: "PDBT",
    incrementoEstimado: 0.031,
    otrosCargos: 0.0,
  },
  {
    fee: "GDBT",
    incrementoEstimado: 0.035,
    otrosCargos: 0.005,
  },
  {
    fee: "GDMTH",
    incrementoEstimado: 0.041,
    otrosCargos: 0.015,
  },
  {
    fee: "GDMTO",
    incrementoEstimado: 0.037,
    otrosCargos: 0.02,
  },
  {
    fee: "DIS",
    incrementoEstimado: 0.021,
    otrosCargos: 0.02,
  },
  {
    fee: "Promedio",
    incrementoEstimado: 0.0317,
    otrosCargos: 0.01,
  },
];


export const factorDeEmision = 0.000435;

export const equivalenciaArbolesPlantados = 40.1488;

export const autosFueraCirculacion = 2.608;

export const superficieCuadradaRequerida = 3.3;


export const formSteps = [
  {
    id: "Paso 1",
    name: "Consumo Energetico",
    fields: ["moneyMonthSpent", "state", "feeType"],
  },
  {
    id: "Paso 2",
    name: "Datos de Contacto",
    fields: ["name", "company", "email", "phoneNumber"],
  },
  {
    id: "Resultados",
    name: ""
  }
];