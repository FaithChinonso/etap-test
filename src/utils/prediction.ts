export const predictFuelRefill = (fuelLevel, consumptionRate) => {
  const threshold = 20; // Threshold percentage for refill alert
  if (fuelLevel <= threshold) {
    const predictedKilometers = fuelLevel / consumptionRate;
    return `Low fuel! Refill in ${predictedKilometers.toFixed(2)} km.`;
  }
  return null;
};

export const predictOverheating = engineTemperature => {
  const threshold = 100;
  if (engineTemperature > threshold) {
    return `Warning: Engine overheating! Current temperature is ${engineTemperature}°C`;
  }
  return null;
};

export const predictOverspeed = currentSpeed => {
  const maxSpeedLimit = 70;
  if (currentSpeed > maxSpeedLimit) {
    return `Warning: Overspeeding! Current speed is ${currentSpeed} km/h, exceeding the limit of ${maxSpeedLimit} km/h`;
  }
  return null;
};
