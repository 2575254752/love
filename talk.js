new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("曹庆臣 && 高嘉航")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第四个520...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();