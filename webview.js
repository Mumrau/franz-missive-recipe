module.exports = (Franz) => {
    function getMessages() {
        // Get counters for main inbox and separate mailboxes
        let counters = document.getElementsByClassName("unseen-count");

        // Keep only main counter that aggregates itself other mailboxes - which is the first one-
        let mainCounter = counters[0]

        // Retrieve the count
        let count = parseInt(mainCounter.innerHTML.trim())

        Franz.setBadge(count);
    }
    Franz.loop(getMessages);
}