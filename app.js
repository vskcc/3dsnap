'use strict';

var dropZone = document.getElementById('drop-zone');
// var uploadForm = document.getElementById('js-upload-form');
//
// var startUpload = function (files) {
//     console.log(files)
// }

// uploadForm.addEventListener('submit', function (e) {
//     var uploadFiles = document.getElementById('js-upload-files').files;
//     e.preventDefault()
//
//     startUpload(uploadFiles)
// })

$('#drop-zone').click(function (e) {
    $('#imgupload').trigger('click');
});

$('#imgupload').on('change', function (e) {
    $('#js-upload-form').submit();
});

$('#js-upload-form').submit(function (e) {
    $('#progressbar-container').css({display: 'block'});

    var elem = document.getElementById("progressbar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);

            var filname = $('#imgupload').val().split('\\').pop();

            $('#upload-finished').fadeIn();

            $('#filename').text(filname);

            $('#generate').removeClass('disabled');

            $('#drop-zone').hide()
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }

    return false;
});

$('#generate').click(function () {
    HoldOn.open({
        theme: 'sk-folding-cube',
        message: "<h4>Generating 3D Models</h4>"
    });

    setTimeout(function () {
        HoldOn.close();

        var files = [
            'images/thanos1.jpg',
            'images/thanos2.jpg',
            'images/thanos3.jpg',
            'images/thanos4.jpg'
        ];

        $('#image-container').empty();

        var arr = [];
        while (arr.length < 3) {
            var r = Math.floor(Math.random() * 4);
            if (arr.indexOf(r) === -1) {
                arr.push(r);
                $('#image-container').append('<div class="col-md-4">\n' +
                    '                    <div class="card mb-4 box-shadow">\n' +
                    '                        <img id="image1" class="card-img-top"\n' +
                    '                             src="' + files[r] + '"\n' +
                    '                             data-holder-rendered="true">\n' +
                    '                        <div class="card-body">\n' +
                    '                            <div class="d-flex justify-content-between align-items-center">\n' +
                    '                                <div class="btn-group">\n' +
                    '                                    <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>');
            }
        }

        $('#images').fadeIn(5000);

        $('html, body').animate({
            scrollTop: ($('#images').offset().top)
        }, 500);
    }, 3000);
});

// dropZone.ondrop = function (e) {
//     e.preventDefault();
//     this.className = 'upload-drop-zone';
//
//     startUpload(e.dataTransfer.files)
// }
//
// dropZone.ondragover = function () {
//     this.className = 'upload-drop-zone drop';
//     return false;
// }
//
// dropZone.ondragleave = function () {
//     this.className = 'upload-drop-zone';
//     return false;
// }
