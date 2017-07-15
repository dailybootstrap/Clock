$('.countdown').downCount({
    date: '06/10/2018 12:00:00',
    offset: +10
}, function () {
    alert('WOOT WOOT, done!');
});
$(document).ready(function() {
    $('#fullpage').fullpage({
        resize: false,
        menu: '#menu',
        anchors: ['Home', 'Contact'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Contact'],
        responsiveWidth: 1024
    });
});
