function selectInstrumentsOptimally(equipmentList, maxPayload, maxCapacity) {
    equipmentList.forEach(equipment => {
     equipment.efficiency = equipment.value / (equipment.weight + equipment.volume);
 });

    equipmentList.sort((a, b) => b.efficiency - a.efficiency);

 let currentWeight = 0;
 let currentVolume = 0;
 let totalScientificValue = 0;
 let chosenEquipment = [];

   for (let equipment of equipmentList) {
     if (currentWeight + equipment.weight <= maxPayload && currentVolume + equipment.volume <= maxCapacity) {
         chosenEquipment.push(equipment);
         currentWeight += equipment.weight;
         currentVolume += equipment.volume;
         totalScientificValue += equipment.value;
     }
 }

 return {
     chosenEquipment,
     currentWeight,
     currentVolume,
     totalScientificValue
 };
}

const equipmentList = [
 { weight: 3, volume: 2, value: 10, name: 'Instrument 1' },
 { weight: 4, volume: 3, value: 15, name: 'Instrument 2' },
 { weight: 2, volume: 1, value: 8, name: 'Instrument 3' },
 { weight: 5, volume: 4, value: 20, name: 'Instrument 4' }
];

const maxPayload = 10;
const maxCapacity = 7;

const selectionResult = selectInstrumentsOptimally(equipmentList, maxPayload, maxCapacity);

console.log("Selected combination of equipment:");
selectionResult.chosenEquipment.forEach(equipment => {
 console.log(`${equipment.name} (Weight: ${equipment.weight}kg, Volume: ${equipment.volume}m^3, Value: ${equipment.value})`);
});
console.log(`Total Weight: ${selectionResult.currentWeight}kg`);
console.log(`Total Volume: ${selectionResult.currentVolume}m^3`);
console.log(`Total Scientific Value: ${selectionResult.totalScientificValue}`);
