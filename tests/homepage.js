module.exports = {
    'Demo test Google' : function (client) {
        client
            .url('http://www.google.com');
            client.waitForElementVisible('body', 1000);
            client.assert.title('Google');
            client.assert.visible('input[type=text]');
            client.setValue('input[type=text]', 'rembrandt van rijn');
            client.click("#tsf > div.tsf-p > div.jsb > center > input[type='submit'   ]:nth-child(1)");
            client.pause(1000);
            client.assert.containsText('ol#rso li:first-child',
            'Rembrandt - Wikipedia');
            client.end();
    }
}
