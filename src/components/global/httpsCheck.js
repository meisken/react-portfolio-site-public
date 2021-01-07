export const httpsCheck = () => {
    let location = document.location;
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
}