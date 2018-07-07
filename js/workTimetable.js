class WorkTimetable{
    constructor(itemClass , activeItemClass, defaultCurrentDay){
        this.workHoursByDay = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thurday: [],
            friday: [],
            saturday: [],
            sunday: []
        }
        this.activeDay = defaultCurrentDay || 'monday';
        this.itemClass = itemClass;
        this.activeItemClass = activeItemClass;
    }

    renderTimetableForDay(day_name){
        this.activeDay = day_name
        let hoursItemsArr = document.getElementsByClassName(this.itemClass)
        let selectedHoursId = this.worksHoursForCurrentDay()
        for(let i = 0; i < hoursItemsArr.length; i++){
                   
            if (selectedHoursId.includes(hoursItemsArr[i].id)){
                hoursItemsArr[i].classList.toggle(this.activeItemClass , true)
            } else{
                hoursItemsArr[i].classList.toggle(this.activeItemClass , false)
            }
        }
    }
    setHoursForWork(hoursArr){
        this.workHoursByDay[this.activeDay] = hoursArr;
    }

    setHoursByInterval(startId , endId){
         let hoursItemsArr = document.getElementsByClassName(this.itemClass)

         for(let i = 0; i < hoursItemsArr.length; i++){
             if ( (+hoursItemsArr[i].id >= startId) && (+hoursItemsArr[i].id <= endId ) ){
                 console.log(hoursItemsArr[i].id)
                this.workHoursByDay[this.activeDay].push(hoursItemsArr[i].id);
                hoursItemsArr[i].classList.toggle(this.activeItemClass , true);
             }
         } 
    }

    worksHoursForCurrentDay(){
        return this.workHoursByDay[this.activeDay]
    }

    totalWorkHoursForActiveDay(){
        return this.workHoursByDay[this.activeDay].length
    }
}




