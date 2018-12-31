import logData from './mock';

Page({
    data: {
        logData: logData,
    },
    onLoad,
});

function onLoad() {
    console.log('on load');
}