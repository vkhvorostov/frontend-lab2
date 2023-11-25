$(function() {
    // Handler for .ready() called

    const depositTimesByType = [
        [
            {'title': '6 месяцев', 'rate': 20},
            {'title': '1 год', 'rate': 22},
            {'title': '1,5 года', 'rate': 15},
            {'title': '2 года', 'rate': 10}
        ],
        [
            {'title': '3 месяца', 'rate': 20},
            {'title': '6 месяцев', 'rate': 22},
            {'title': '9 месяцев', 'rate': 23},
            {'title': '1 год', 'rate': 24},
            {'title': '1,5 года ', 'rate': 18},
            {'title': '2 года', 'rate': 15}
        ]
    ];

    // el  = document.getElementById('deposit-type')
    // el.addEventListener('click', function() {})
    $('#deposit-type').on('change', function () {
        $('#deposit-time').empty();
        let selectedValue = $(this).val();
        console.log('type:' + selectedValue);
        if (selectedValue > 0) {
            let times = depositTimesByType[selectedValue - 1];
            console.log(times);
            times.forEach(function (item) {
                let option = `<option value="${item.rate}">${item.title}</option>`;
                $('#deposit-time').append($(option));
            });
        }
        //$('#results').append($('<p>').text(times));
    });

});