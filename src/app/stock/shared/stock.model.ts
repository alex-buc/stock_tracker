export interface StockModel {
    symbol:string,
    info:StockInfoModel,
    quote:StockQuoteModel,
    error: string;
}

export interface StockInfoModelResult {
    count:number,
    result:Array<StockInfoModel>
}
export interface StockInfoModel {
    description:string,
    displaySymbol:string,
    symbol:string,
    type:string
}

export interface StockQuoteModelResult {
    c:number,
    d:number,
    dp:number,
    h:number,
    l:number,
    o:number,
    pc:number
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