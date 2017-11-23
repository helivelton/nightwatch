module.exports = {
    'Demo test Google': function (browser) {
        browser
            .url('http://www.google.com')
            .useXpath()
            .click("//*[@id=\"lst-ib\"]")
            .setValue("//*[@id=\"lst-ib\"]", 'nightwatch')
            .click("//*[@id=\"tsf\"]/div[2]/div[3]/center/input[1]")
            .pause(2000)
            .end();
    }
}
