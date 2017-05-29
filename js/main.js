$('.countdown').downCount({
    date: '06/10/2018 12:00:00',
    offset: +10
}, function () {
    alert('WOOT WOOT, done!');
});
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page']
    });
});
var wow = new WOW(
    {
        mobile:false,       // trigger animations on mobile devices (default is true)
    }
);
wow.init();