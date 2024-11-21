function formatMoney(x) {
    return new Intl.NumberFormat("ru-RU").format(x);
}

export function useFunctions() {
    return({
        formatMoney,
    })
}
