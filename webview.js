const COUNT_REGEX = /^\((\d+)\)/;

module.exports = (Franz) => {
    function getMessages() {
        let countMatch = null;

        if (countMatch = document.title.match(COUNT_REGEX)) {
            let count = parseInt(countMatch[1]);
            Franz.setBadge(count);
        } else {
            Franz.setBadge(0);
        }
    }

    Franz.loop(getMessages);
}
