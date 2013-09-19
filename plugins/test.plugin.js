exports.name = 'Test1';
exports.commands= {
    test1: function(bot,from,to,message){
        bot.say(to, 'test1');
    },
    test2: function(bot,from,to,message){
        bot.say(to, 'test2');
    }
};