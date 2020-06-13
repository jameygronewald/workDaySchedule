// Current date and time for header
$('#currentDay').text(moment().format('dddd MMMM do, YYYY'));
$('#currentTime').text(moment().format('LTS'));

{/*     <div class="timeBlock">
          <div class="row">
            <div class="col-2 hour">
                
            </div>
            <div class="col-8 past">

            </div>
            <div class="col-2 saveBtn">

            </div>
          </div>
        </div>      */}

const workDayHours = [
    '9:00AM',
    '10:00AM',
    '11:00AM',
    '12:00PM',
    '1:00PM',
    '2:00PM',
    '3:00PM',
    '4:00PM',
    '5:00PM'
]
// Functions
const displayTimeBlocks = function() {
    let i = 0;
    while (i < workDayHours.length) {
        let timeBlock = $('<div>').addClass('timeBlock');
        let row = $('<div>').addClass('row');
        let hourColumn = $('<div>').addClass('col-1 hour');
        let activitiesColumn = $('<div>').addClass('col-10');
        let saveColumn = $('<div>').addClass('col-1 saveBtn');
        $(row).append(hourColumn.text(workDayHours[i]));
        $(row).append(activitiesColumn);
        $(row).append(saveColumn);
        $(timeBlock).append(row);
        $('.container').append(timeBlock);
        i++;
    }
};


// Function Calls
displayTimeBlocks();

// Event Listeners