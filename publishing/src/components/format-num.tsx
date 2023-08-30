const formatNum = (num: number) => { 
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(num)
}

export default formatNum;