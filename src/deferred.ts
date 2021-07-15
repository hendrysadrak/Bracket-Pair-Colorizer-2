export const getDeferred = () => {
    let resolve: () => void;
    let reject: () => void;

    const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve as () => void;
        reject = _reject;
    });

    return {
        // @ts-ignore
        resolve,
        // @ts-ignore
        reject,
        promise,
    };
};
