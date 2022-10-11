export interface SentimentModel {
    symbol:string,
    "year":number,
    "month":number,
    "change":number,
    "mspr":number
}

export interface StockModelResult {
    data:Array<SentimentModel>
}
