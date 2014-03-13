$(document).ready(function() {
    $('.simpleticketstats').each(function( index ) {
        var id = $( this ).attr('id');
        var width = window[id+'_width'];
        var height = window[id+'_height'];
        var closedTickets = window[id+'_closedTickets'];
        var openedTickets = window[id+'_openedTickets'];
        var reopenedTickets = window[id+'_reopenedTickets'];
        var openTickets = window[id+'_openTickets'];
        var graph = $( this ).width(width).height(height),
        barSettings = { show: true, barWidth: 86400000 };
        $.plot($( this ),
        [
            {
                data: closedTickets,
                label: 'Removed',
                bars: barSettings,
                color: 3
            },
            {
                data: openedTickets,
                label: 'Added',
                bars: barSettings,
                color: 2,
				stack: true
            },
            {
                data: reopenedTickets,
                label: 'Readded',
                bars: barSettings,
                color: 4,
				stack: true
            },
            {
                data: openTickets,
                label: 'Current',
                yaxis: 2,
                lines: { show: true },
                color: '#000000'
            }
        ],
        {
            xaxis: { mode: 'time', minTickSize: [1, "day"] },
            yaxis: { label: 'Tickets' },
            y2axis: { },
            legend: { position: 'nw' }
        });
    });
});
