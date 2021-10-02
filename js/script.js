var buttons = $("button");
var player = "X";

var clickHandler = (e) => {
    $(e.target).html(player);

    if (e.target.classList) 
        $(e.target).addClass(player);
    
    player = player == "X" ? "O":"X"
};

buttons.each(() => {
    $(this).click(clickHandler);
});