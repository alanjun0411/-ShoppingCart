$(function () {
    // let list = JSON.parse(localStorage.getItem('cars')) || [];
    let list = jsonData('cars') || [];
    console.log(list);
    

    if (list.length > 0) {
        $('.empty-tip').css('display', 'none');
        $('.cart-header').removeClass('hidden');
        $('.total-of').removeClass('hidden');
        let html="";
        list.forEach(e => {
            html +=`<div class="item" data-id="${e.id}">
            <div class="row">
              <div class="cell col-1 row">
                <div class="cell col-1">
                  <input type="checkbox" class="item-ck" checked="">
                </div>
                <div class="cell col-4">
                  <img src="${e.src}" alt="">
                </div>
              </div>
              <div class="cell col-4 row">
                <div class="item-name">${e.name}</div>
              </div>
              <div class="cell col-1 tc lh70">
                <span>￥</span>
                <em class="price">${e.price}</em>
              </div>
              <div class="cell col-1 tc lh70">
                <div class="item-count">
                  <a href="javascript:void(0);" class="reduce fl">-</a>
                  <input autocomplete="off" type="text" class="number fl" value="${e.sum}">
                  <a href="javascript:void(0);" class="add fl">+</a>
                </div>
              </div>
              <div class="cell col-1 tc lh70">
                <span>￥</span>
                <em class="computed">${e.price*e.sum}</em>
              </div>
              <div class="cell col-1">
                <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
              </div>
            </div>
          </div>`;
          // console.log(html);
        })
        
        
        $('.item-list').html(html);
        

       
        $('.pick-all').on('click',()=>{
          console.log($('.pick-all'));
          
          
          $('.item-ck').prop('checked',$('.pick-all').prop('checked'));
          $('.pick-all').prop('checked',$('.pick-all').prop('checked'));
        })
        
    }

})