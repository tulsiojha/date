import CalendarData from "./CalendarData"

export default function(engDay:number) {
    if (engDay < 9) {
        return CalendarData.number.np[engDay]
    }else{
        var tempNumber = engDay
        var returnData = ''
        while (tempNumber !=0) {
            returnData = CalendarData.number.np[tempNumber%10] + returnData
            tempNumber = Math.floor(tempNumber/10);
        }
        return returnData;
    }
}