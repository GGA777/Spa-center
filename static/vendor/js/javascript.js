document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

let count = 0;

$(".cart-btn").on("click", function (){
    let cart = $(".cart-nav");
    let imgtodrag = $(this)
    .parent(".buttons")
    .parent(".content1")
    .parent(".card")
    .find("img")
    .eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag
        .clone()
        .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left,
        })
        .css({
            opacity: "0.8",
            position: "absolute",
            height: "150px",
            width: "150px",
            objectFit: "cover",
            "z-index": "100"
        })
        .appendTo("body")
        .animate(
            {
              top: cart.offset().top + 20,
              left: cart.offset().left + 30,
              width: 75,
              height: 75
        },
        1000,
        "easeInOutExpo"
        );

        setTimeout(function(){
            count++;
            $(".cart-nav .item-count").text(count);
        }, 1500);
        imgclone.animate(
            {
                width: 0,
                height: 0
            },
            function () {
                $(this).detach();
            }
        );
    }
});