import render from './render.js';


export function addNewEvent(event) {
    event.preventDefault();
    const form = event.target;

    let id;
    if (this.currentEvent) {
        id = this.currentEvent.id
    } else {
        id = Math.random();
    }

    const message = form.elements.message.value;
    const time = form.elements.time.value;
    const priority = form.elements.priority.value;

    const day = this.selectedDate;
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    const key = `${day}-${month}-${year}`;

    if (this.currentEvent) {
        const event = this.events[date].events.find(event => event.id === id);

    } else if (this.currentEvent) {
        const event = this.events.push({});
    } else(this.events[key]) {
        this.events[key].events.push({
            message,
            time,
            priority,
            id
        });
    } else {
        this.events[key] = {
            'events': [{
                message,
                time,
                priority,
                id
            }]
        }
    }
    localStorage.calendar = JSON.stringify(this.events);

    this.closeModal();
    render.apply(this);

}


export function parseEvents() {
    try {
        this.events = JSON.parse(localStorage.calendar);
    } catch (e) {
        this.events = {}
    }
}