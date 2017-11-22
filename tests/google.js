module.exports = {
    tags: ['google'],
    'Demo test Google' : function (client) {
        client
            .url('http://google.no')
            .pause(1000);

        client.expect.element('body').to.be.present;

        client.expect.element('#lst-ib').to.have.css('display');

        client.expect.element('body').to.have.attribute('class');

        client.expect.element('#lst-ib').to.be.an('input');

        client.expect.element('#hplogo').text.to.match(/Norge/).before(1000);
;
        client.expect.element('#lst-ib').to.be.visible;

        client.end();
    }
};