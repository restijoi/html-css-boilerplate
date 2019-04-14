$(document).ready(function() {

    //opens create note popup on reply form inside inbox thread
    $('.createNote-toggle').on('click', function() {
        $('.create-note-form').toggleClass('show-form');
    })

    //triggers next step for sign up process in sign up page
    var signupTrigger = $('.section-container .btn');
    signupTrigger.on('click', function() {
        $(this).closest(".section-container").addClass('completed');

        if ($('.section-container').hasClass('completed')) {
            $('.completed .number').html('<i class="nc-icon-mini ui-1_check"></i>');
        }
    })

    $('#signup').on('shown.bs.collapse', function() {
        $('.show').closest(".section-container").toggleClass('active');


    })
    $('#signup').on('hide.bs.collapse', function() {
        $('.show').closest(".section-container").removeClass('active');

    })

});