$(function () {
    let id = location.search.substring(4);
    let data = phoneData.find(e => {
        return e.pID == id;
    })
    $('.choose-number').val(1);
    $('.preview-img img').attr('src', data.imgSrc);
    $('.sku-name').text(data.name);
    $('.summary-price em').text(`¥${data.price}`);

    let num = 1;
    $('.add').on('click', () => {
        num++;
        $('.choose-number').val(num);
        if (num == 2) {
            $('.reduce').removeClass('disabled');
        }
        console.log($('.choose-number').val());
    })
    $('.reduce').on('click', () => {
        if (num > 1) {
            num--;
            $('.choose-number').val(num);
        }
        if (num == 1) $('.reduce').addClass('disabled');
    })
})
