const generateRandomDataAsync = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = {
        speed: Math.ceil(Math.random() * 100),
        rpm: Math.ceil(Math.random() * 3000),
        fuelLevel: Math.ceil(Math.random() * 100),
        engineTemperature: Math.ceil(Math.random() * 100),
        latitude: parseFloat((Math.random() * 180 - 90).toFixed(2)),
        longitude: parseFloat((Math.random() * 360 - 180).toFixed(2)),
      };
      resolve(data);
    }, 0);
  });
};

export default generateRandomDataAsync;
