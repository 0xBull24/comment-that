$(function() {
    $('#submitComment').on('click', event => {
        event.preventDefault();

        // Grab info from form
        const newComment = {
            name: $('#username').val().trim().toUpperCase(),
            comment: $('#newComment').val().trim(),
            id: $('#submitComment').attr('data-id'),
        }

        // POST
        $.ajax(`/topics/${newComment.id}`, {
            type: 'POST',
            data: newComment
        }).then(response => {
            location.reload(true);
        }).catch (err => {
            if (err) {
                console.log(err);
            }
        });
    });


})