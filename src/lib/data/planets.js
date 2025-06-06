/**
 * Данные о планетах Солнечной системы.
 * Источники: NASA Planetary Fact Sheet, Wikipedia (усредненные или общепринятые значения)
 * - Диаметр: Средний диаметр в км.
 * - Масса: Относительно массы Земли (Земля = 1).
 * - Спутники: Количество известных естественных спутников (может меняться с новыми открытиями).
 * - Орбита: Среднее расстояние от Солнца в миллионах км.
 * - Год: Орбитальный период в земных сутках.
 * - Температура: Средняя температура на поверхности (°C) или на уровне облаков для газовых гигантов.
 */
export const planets = [
	{
		id: 'mercury',
		name: 'Меркурий',
		diameter: 4879,
		mass: 0.055,
		satellites: 0,
		orbit: 57.9,
		year: 88,
		temperature: 167,
		gravity: 0.38,
		image: '/images/universe/planets/mercury.webp'
	},
	{
		id: 'venus',
		name: 'Венера',
		diameter: 12104,
		mass: 0.815,
		satellites: 0,
		orbit: 108.2,
		year: 224.7,
		temperature: 464,
		gravity: 0.9,
		image: '/images/universe/planets/venus.webp'
	},
	{
		id: 'earth',
		name: 'Земля',
		diameter: 12742,
		mass: 1,
		satellites: 1,
		orbit: 149.6,
		year: 365.25,
		temperature: 15,
		gravity: 1.0,
		image: '/images/universe/planets/earth.webp'
	},
	{
		id: 'mars',
		name: 'Марс',
		diameter: 6779,
		mass: 0.107,
		satellites: 2,
		orbit: 227.9,
		year: 687,
		temperature: -63,
		gravity: 0.38,
		image: '/images/universe/planets/mars.webp'
	},
	{
		id: 'jupiter',
		name: 'Юпитер',
		diameter: 139820,
		mass: 317.8,
		satellites: 95,
		orbit: 778.5,
		year: 4333,
		temperature: -110,
		gravity: 2.53,
		image: '/images/universe/planets/jupiter.webp'
	},
	{
		id: 'saturn',
		name: 'Сатурн',
		diameter: 116460,
		mass: 95.2,
		satellites: 146,
		orbit: 1432.0,
		year: 10759,
		temperature: -140,
		gravity: 1.06,
		image: '/images/universe/planets/saturn.webp'
	},
	{
		id: 'uranus',
		name: 'Уран',
		diameter: 50724,
		mass: 14.5,
		satellites: 27,
		orbit: 2871.0,
		year: 30687,
		temperature: -195,
		gravity: 0.9,
		image: '/images/universe/planets/uranus.webp'
	},
	{
		id: 'neptune',
		name: 'Нептун',
		diameter: 49244,
		mass: 17.1,
		satellites: 14,
		orbit: 4495.1,
		year: 60190,
		temperature: -201,
		gravity: 1.14,
		image: '/images/universe/planets/neptune.webp'
	}
];

export const planetsById = planets.reduce((acc, planet) => {
	acc[planet.id] = planet;
	return acc;
}, {});
