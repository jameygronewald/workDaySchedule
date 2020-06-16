$(document).ready(function () {
    // GLOBAL VARIABLES
    // Array used for loop that generates rows
    const workDayHours = [
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17'
    ];
    // Array used in tandem with other array to display the hours to the DOM in desired format
    const displayHours = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
        '5:00 PM'
    ];
    // Empty array that will be filled later with saved user inputs
    let activities = [];
    // Variables that hold present time/date info from moment.js API
    let now = moment();
    let hour = now.hour();
    // Current date and time for header
    $('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));
    currentTime = $('#currentTime').text(moment().format('LTS'));

    // FUNCTIONS
    // Function that displays time blocks in the schedule; conditionals determine color of blocks depending on the time of day; also assigns classes and id's to the elements as they're generated for styling and to use for manipulating and saving inputs later
    const displayTimeBlocks = function() {
        let i = 0;
        while (i < workDayHours.length) {
            timeBlock = $('<div>').addClass('timeBlock');
            row = $('<div>').addClass('row');
            hourColumn = $('<div>').addClass('col-2 hour');
            activitiesColumn = $('<input>').addClass('col-9 activity').attr('id', 'hour' + i);
            if (workDayHours[i] == hour) {
                activitiesColumn.addClass('present');
            }
            else if (workDayHours[i] < hour) {
                activitiesColumn.addClass('past');
            }
            else {
                activitiesColumn.addClass('future');
            };
            saveColumn = $('<button>').addClass('col-1 saveBtn');
            icon = $('<svg class="bi bi-unlock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 0 0-.224.296 1.626 1.626 0 0 0-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 0 0 .436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 0 0 .224-.296 1.627 1.627 0 0 0 .138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 0 0-.255-.237A1.122 1.122 0 0 0 9.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/></svg>');
            $(row).append(hourColumn.text(displayHours[i]));
            $(row).append(activitiesColumn);
            $(row).append(saveColumn);
            $(saveColumn).append(icon);
            $(timeBlock).append(row);
            $('.container').append(timeBlock);
            i++;
        };
    };

    // FUNCTION CALLS
    displayTimeBlocks();
    // This loop iterates through the array that corresponds to the number of schedule hours and matches the saved item in storage with the corresponding id and allows that value to persist in the user input beyond page refresh
    let hourIndex = 0;
    while (hourIndex < workDayHours.length) {
        $('#hour' + hourIndex).val(localStorage.getItem('hour' + hourIndex));
        hourIndex++
    };
    // EVENT LISTENERS
    $('.saveBtn').on('click', function(event) {
        event.preventDefault;
        $(this).html('<svg class="bi bi-lock-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect width="11" height="9" x="2.5" y="7" rx="2"/><path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/></svg>');
        // These lines grabs the sibling element of the button that has been clicked that contain the class .activity, then grabs the id of that element (this will be the input that corresponds to the clicked button); then it saves the value of that input in another variable and activityObject repurposes those variables into an object that can be pushed into the activities array; the object is then saved into local storage so it can be retrieved when the page is loaded
        let savedActivityIndex = $(this).siblings('.activity').attr('id');
        let savedActivity = $(this).siblings('.activity').val();
        let activityObject = {savedActivityIndex, savedActivity};
        activities.push(activityObject);
        localStorage.setItem(savedActivityIndex, savedActivity);
    });
});