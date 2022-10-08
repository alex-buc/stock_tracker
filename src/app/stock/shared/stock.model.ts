export interface StockModel {
    symbol:string,
    info:StockInfoModel,
    quote:StockQuoteModel
}

export interface StockInfoModel {
    description:string,
    displaySymbol:string,
    symbol:string,
    type:string
}

export interface StockQuoteModel {
    currentPrice:number,
    change:number,
    percentChange:number,
    highestPriceToday:number,
    lowestPriceToday:number,
    openingPrice:number,
    previousClosePrice:number
}
