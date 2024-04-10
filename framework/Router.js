module.exports = class Router{
    constructor(){
        this.endpoints = {}
    }

    request(path, method= "GET", handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];

        if(endpoint[method]){
            throw new Error(`по пути ${path} уже существуеь метод ${method}`)
        }
        endpoint[method] = handler
        
    }

    get(path, handler){
        this.request(path, "GET", handler)
    }
    
    post(path, handler){
        this.request(path, "POST", handler)
    }
    put(path, handler){
        this.request(path, "PUT", handler)
    }
    delete(path, handler){
        this.request(path, "DELETE", handler)
    }
}