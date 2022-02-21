//read heavy
// start time,   end time,   name 

const { clearCustomQueryHandlers } = require("puppeteer");

//insert events 
// return ordered collection ordered by start time, ascending, then end time ascending , then by name 



//Questions
// When you say read heavy, you just want the whole thing right?

//can i just assume a double for now, and replace with time

class Calendar {
    eventList;

    //constructor should initialize an empty list
    constructor(){
        this.eventList = [];
    }

    //insert an event 
    //Because it is read heavy, we are going to keep the list ordered
    insert(start, end, name){
        let newEvent = new Event(start, end, name);
    
        let added = false;
        for(let i=0; i<this.eventList.length; i++){
            let currentEvent = this.eventList[i];

            //traverse the list until we find that the next event start time is greater or equal to newEvent
            if(currentEvent.startTime >= newEvent.startTime){
                
                //if not equal, add before
                if(currentEvent.startTime != newEvent.startTime){
                    this.eventList.splice(i, 0, newEvent);
                    added = true;
                    break;
                }

                //start time is equal. compare the end time
                else if(currentEvent.endTime > newEvent.endTime){
                    console.log('new event end time is smaller')
                    this.eventList.splice(i, 0, newEvent);
                    added = true;
                    break;
                }
                else if(currentEvent.endTime == newEvent.endTime){
                    //check name
                    if(currentEvent.name >= newEvent.name){
                
                        this.eventList.splice(i, 0, newEvent);
                        added = true;
                    }
                    else{
                        continue;
                    }
                }
                //end time for event is less than new event -> go to next event
                else{
                    continue;
                }
            }
            
            
        }
        if(!added){
            this.eventList.push(newEvent)
            console.log('added')
        }

    }

    view(){
        return this.eventList;
    }

    delete(name){
        for(let i =0; i< this.eventList.length; i++){
            if(this.eventList[i].name == name){
                this.eventList.splice(i,1);
                return true;
            }
        }
        return false;
    }

    eventsForPage(pageSize, pageNum){
        let eventItemStart = ((pageNum-1)  * pageSize ) 
        
        if(eventItemStart >= this.eventList.length){
            return [];
        }
        else if(eventItemStart + pageSize >= this.eventList.length){
            pageSize = this.eventList.length  - eventItemStart;
        }
     
        return this.eventList.splice(eventItemStart, pageSize);
    }
  


}

class Event {
    startTime;
    endTime;
    name; 
    constructor(startTime, endTime, name){
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
    }

}


let calendar = new Calendar();
// calendar.insert(3, 8, 'a');
// calendar.insert(3,5, 'b');
// calendar.insert(4,6, 'c')
// console.log(calendar.view());
// console.log(calendar.delete('a'));
// console.log(calendar.view());


calendar.insert(1,2,'a');
console.log(calendar.view());
calendar.insert(3,4,'b');
calendar.insert(4,5,'c');
calendar.insert(6,7,'d');
calendar.insert(8,9,'e');
console.log(calendar.view());
console.log(calendar.eventsForPage(2,2));

