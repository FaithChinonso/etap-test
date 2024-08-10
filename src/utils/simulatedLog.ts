export const generateSimulatedJourneyData = () => {
  const id = Math.floor(Math.random() * 1000) + 1;
  const startDate = new Date(
    Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000,
  );
  const endDate = new Date(
    startDate.getTime() + Math.floor(Math.random() * 24) * 60 * 60 * 1000,
  );
  const distanceTraveled = (Math.random() * 300).toFixed(2);
  const averageSpeed = (Math.random() * 100).toFixed(2);
  const fuelConsumed = (Math.random() * 20).toFixed(2);
  const stops = Math.floor(Math.random() * 5);
  const maxSpeed = (Math.random() * 160).toFixed(2);
  const vehicleModels = ['SUV', 'Sedan', 'Truck'];
  const vehicleModel =
    vehicleModels[Math.floor(Math.random() * vehicleModels.length)];
  const weatherConditions = ['Clear', 'Rainy', 'Snowy', 'Foggy'];
  const randomWeatherIndex = Math.floor(
    Math.random() * weatherConditions.length,
  );
  const weatherCondition = weatherConditions[randomWeatherIndex];

  return {
    id,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    distanceTraveled,
    averageSpeed,
    fuelConsumed,
    stops,
    maxSpeed,
    vehicleModel,
    weatherCondition,
  };
};
