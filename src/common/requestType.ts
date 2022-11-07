const requestType: IRequestType = {
    params: "params",
    query: "query",
    body: "body",
};

interface IRequestType {
    params: string;
    query: string;
    body: string;
}

module.exports = requestType;
