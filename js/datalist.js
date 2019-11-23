$(function () {
    let id = location.search.substring(4);
    let data = phoneData.find(e => {
        return e.pID == id;
    })
    $('.choose-number').val(1);
    $('.preview-img img').attr('src', data.imgSrc);
    $('.sku-name').text(data.name);
    $('.summary-price em').text(`¥${data.price}`);


    $('.add').on('click', () => {
        counter('.choose-number', function (e) {
            $('.choose-number').val(e);
            if (e == 2) $('.reduce').removeClass('disabled');
        }, true)
    })
    $('.reduce').on('click', () => {
        let num = $('.choose-number').val();
        if (num > 1) {
            num = counter('.choose-number', function (e) {
                $('.choose-number').val(e);
            }, false)
        }
        if (num == 1) $('.reduce').addClass('disabled');
    })



    let list = jsonData('cars') || [];
    $('.count').text(list.length);
    $('.addshopcar').on('click', () => {
        let number = $('.choose-number').val();
        console.log(number);
        
        if (isNaN(number) || number.trim() == '' || number <= 0) {
            alert('数量输入不正确！！！');
        } else {
            let newP = list.find(e => {
                return e.id == id;
            })
            number = parseInt(number);
            if (newP) {
                newP.sum += number;

            } else {
                let obj = {
                    id: data.pID,
                    sum: number,
                    name: data.name,
                    price: data.price,
                    src: data.imgSrc,
                    isChecked: true
                }
                list.push(obj);
            }
            jsonData('cars', list);
            location.href = './cart.html';
        }

        $('.count').text(list.length);
       
    })
})
