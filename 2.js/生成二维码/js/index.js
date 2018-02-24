$(function () {
            $('#get_code').on('click', function () {
                $("#qrcode").html("");
                var txt = $("#qrcode_text").val();
                var type = $("#get_png").attr('data-id');
                if (txt == null || txt == undefined || txt == '' || isNaN(txt)) {
                    alert('请输入正确id号');
                    return;
                }
                if (type == 1) {
                    var url = 'http://activity.hotol.cn/register?promote_code=' + txt;
                    var qrcode = new QRCode('qrcode', {
                        text: url,
                        width: 150,
                        height: 120,
                        colorDark: '#000000',//前景色
                        colorLight: '#ffffff',//背景色
                        correctLevel: QRCode.CorrectLevel.H//容错级别
                    });
                    $('.code').css({ 'top': '310px', 'left': '200px' });
                }
                if (type == 2) {
                    var url = 'http://activity.hotol.cn/register?promote_code=' + txt;
                    var qrcode = new QRCode('qrcode', {
                        text: url,
                        width: 150,
                        height: 150,
                        colorDark: '#000000',//前景色
                        colorLight: '#ffffff',//背景色
                        correctLevel: QRCode.CorrectLevel.H//容错级别
                    });
                    $('.code').css({ 'top': '310px', 'left': '200px' });
                }
                if (type == 3) {
                    var url = "http://weixin.qq.com/r/JkkhOTXE1miprXFa9xw0?enterprise_id=" + txt
                    var qrcode = new QRCode('qrcode', {
                        text: url,
                        width: 120,
                        height: 120,
                        colorDark: '#000000',//前景色
                        colorLight: '#ffffff',//背景色
                        correctLevel: QRCode.CorrectLevel.H//容错级别
                    });
                    $('.code').css({ 'top': '290px', 'left': '220px' });
                }
                $('.number').text('ID：' + txt);
            });
            $("#get_png").on("click", function (event) {
                event.preventDefault();
                html2canvas(document.getElementById('code_box'), {
                    allowTaint: true,
                    taintTest: false,
                    onrendered: function (canvas) {
                        canvas.id = "mycanvas";
                        var dataUrl = canvas.toDataURL();
                        var newImg = document.createElement("img");
                        newImg.src = dataUrl;
                        var saveFile = function (data, filename) {
                            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                            save_link.href = data;
                            save_link.download = filename;
                            var event = document.createEvent('MouseEvents');
                            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                            save_link.dispatchEvent(event);
                        };
                        var filename = '二维码.png';
                        saveFile(dataUrl, filename);
                    }
                });
            });
            $(".left_menu a").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                var type = $(this).attr('data-type');
                if (type == 1) {//商户图片
                    $('.bg').attr('src', 'images/sj.png');
                    $("#get_png").attr('data-id', '1');
                }
                if (type == 2) {
                    $('.bg').attr('src', 'images/tg.png');
                    $("#get_png").attr('data-id', '2');
                }
                if (type == 3) {//企业图片
                    $('.bg').attr('src', 'images/qy.png');
                    $("#get_png").attr('data-id', '3');
                }
                $('#qrcode').empty();
                $('#qrcode_text').val('');
                $('.number').text('');
            })
        })