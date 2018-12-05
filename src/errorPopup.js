const ErrorPopup = (() => {
    const instance;

    const createInstance = () => {
        return {};
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
        }
    }
})();