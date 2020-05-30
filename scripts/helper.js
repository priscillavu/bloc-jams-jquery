class Helper {
    parseTime(time) {
        time = Math.round(Number(time));
        const minutes = Math.floor(time / 60);
        
        let seconds = time - (minutes * 60);
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }

        return `${minutes}:${seconds}`;
    }

    playPauseAndUpdate(song) {
        player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;

        $('#time-control .total-time').text(this.parseTime(totalTime));
    }
}

const helper = new Helper();
