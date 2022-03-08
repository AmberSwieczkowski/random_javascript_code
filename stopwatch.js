class Stopwatch {
    constructor() {

        let startTime, endTime, running, duration = 0

        this.start = () => {
            if (running) {
                throw new Error('Stopwatch is already running.')
            }
            running = true
            startTime = new Date()
        }

        this.stop = () => {
            if (!running) {
                throw new Error('Stopwatch is not running.')
            }
            running = false
            endTime = new Date()

            const seconds = endTime.getTime - startTime.getTime / 1000
            duration += seconds

        }

        this.reset = () => {
            startTime = null
            endTime = null
            duration = 0
            running = false

        }

        Object.defineProperty(this, 'duration', {
            get: function() { return duration }
        });
    }
}
