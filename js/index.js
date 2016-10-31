;(function($){
    var ss;
    init();
    function init(){
        ss=window.sessionStorage;

        //图片轮播
        var mySwiper=new Swiper('.swiper-container',{
            slidesPerView: 1,
            loop: true,
            autoplay:5000,
            autoplayDisableOnInteraction:false
        });
        //局部滚动
        var iscroll=new IScroll('#main',{click:true});

        bindEvent(ss);
    }
    function bindEvent(ss){
       $('.famousSpecialist').on('tap','a',function(){
           var p=$(this).data('p');
           console.log(p);
           ss.setItem('person',p);
       })
    }
})(Zepto);