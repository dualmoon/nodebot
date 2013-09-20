exports.name = 'Kitty';
exports.commands= {
    kitty: function(bot,from,to,message){
        var kitties = [
            //* <bot> gives <from> a...
            "depressed kitty. How sad!",
            "happy kitty. Yay!",
            "goth kitty. The weight of the world on its shoulders~",
            "raver kitty. Boom-tis-boom-tis-boom-tis!",
            "hyper kitty. It's bouncing off the walls!",
            "pirate kitty. Yarrr!",
            "ninja kitty, but it disappeared in a puff of smoke."
            ]
        var choice = Math.floor((Math.random()*kitties.length)+1);
        bot.action(to, "gives "+from+" a "+kitties[choice]);
    }
};