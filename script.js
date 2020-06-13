$(document).ready(function () {
    // GLOBAL VARIABLES
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

    let now = moment();
    let hour = now.hour();

    // FUNCTIONS

    // Current date and time for header
    $('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));
    currentTime = $('#currentTime').text(moment().format('LTS'));
    // Function that displays time blocks in scheduling
    const displayTimeBlocks = function() {
        let i = 0;
        while (i < workDayHours.length) {
            timeBlock = $('<div>').addClass('timeBlock');
            row = $('<div>').addClass('row');
            hourColumn = $('<div>').addClass('col-1 hour');
            activitiesColumn = $('<input>').addClass('col-10');
            if (workDayHours[i] == hour) {
                activitiesColumn.addClass('present');
            }
            else if (workDayHours[i] < hour) {
                activitiesColumn.addClass('past');
            }
            else {
                activitiesColumn.addClass('future');
            }
            saveColumn = $('<button>').addClass('col-1 saveBtn');
            $(row).append(hourColumn.text(workDayHours[i]));
            $(row).append(activitiesColumn);
            $(row).append(saveColumn);
            $(timeBlock).append(row);
            $('.container').append(timeBlock);
            i++;
        }
    };

    // FUNCTION CALLS
    displayTimeBlocks();

    // EVENT LISTENERS
    /* $('.saveBtn').on('click', function() {
        let savedActivity = $('<input>').val();
        let locallyStoredActivity = 
    }) */
});