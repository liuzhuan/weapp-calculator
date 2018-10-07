export default function range(start, end, step=1) {
    const result = [];
    let current = start;
    while (true) {
        if (current >= end) break;
        result.push(current);
        current += step;
    }

    return result;
}