export default function round(number, precision=0) {
    const multiple = Math.pow(10, precision);
    return Math.round(number * multiple) / multiple;
}