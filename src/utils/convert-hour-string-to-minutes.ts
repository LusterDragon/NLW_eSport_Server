export function convertHourStringToMinutes(hoursString:string){
const [hours,minutes] = hoursString.split(':').map(Number);
return  (hours*60)+minutes;
}