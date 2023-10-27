export function formatTime(seconds) {

    const hours = parseInt(Math.floor(seconds/3600))
    const minutes = parseInt(Math.floor((seconds - hours*3600)/60))
    const remainingSeconds =  parseInt(Math.floor((seconds - hours*3600 - minutes*60)))

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}