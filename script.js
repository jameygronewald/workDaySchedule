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
    ]

    let now = moment();
    let hour = now.hour();
    // Current date and time for header
    $('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));
    currentTime = $('#currentTime').text(moment().format('LTS'));

    // FUNCTIONS
    // Function that displays time blocks in scheduling
    const displayTimeBlocks = function() {
        let i = 0;
        while (i < workDayHours.length) {
            timeBlock = $('<div>').addClass('timeBlock');
            row = $('<div>').addClass('row');
            hourColumn = $('<div>').addClass('col-2 hour');
            activitiesColumn = $('<input>').addClass('col-9');
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
            icon = $('<svg class="bi bi-archive" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z"/><path fill-rule="evenodd" d="M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/></svg>');
            $(row).append(hourColumn.text(displayHours[i]));
            $(row).append(activitiesColumn);
            $(row).append(saveColumn);
            $(saveColumn).append(icon);
            $(timeBlock).append(row);
            $('.container').append(timeBlock);
            i++;
        }
    };

    // FUNCTION CALLS
    displayTimeBlocks();

    // EVENT LISTENERS
    $('.saveBtn').on('click', function() {
        $(this).html('<svg class="bi bi-archive-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/></svg>');
        /* let savedActivity = $('<input>').val();
        let locallyStoredActivity =  */
    })
});