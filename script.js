// Task #1

$('#btn1').click(() => {
    setTimeout(function () {
        let min = 2;
        $('.num').html(`${min}`);
        setInterval(function () {
            min -= 1;
            if (min > 0) {
                $('.num').html(`${min}`);
            }
            else {
                $('.num').html(`0`);
            }
        }, 60000);
        $('.colorBlack').animate({
            height: '100%'
        }, 60000, 'easeOutSine').animate({
            height: '0%'
        }, 60000, 'easeOutQuad');
    }, 1000);
})

// Task #2

$('#btn2').click(() => {
    let one = $('#s1').text();
    let two = $('.s2').text();
    let three = $('#second i').text();
    let four = $('[title]').text();
    let five = $('[target="_blank"]').text();
    let six = $('.extra').last().text();
    alert(`${one+two+three+four+five+six}`);
})