
export function current() {
    const { geolocation } = window.navigator;
    return new Promise((resolve, reject) => {
        const success = (position) => {
            const { longitude, latitude } = position.coords;
            resolve({ latitude, longitude });
        };
        const fail = err => reject(err)
        geolocation.getCurrentPosition(success, fail);
    });
}
