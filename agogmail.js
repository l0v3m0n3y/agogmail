class agogmail{
    constructor(){
        this.api = "https://www.agogmail.com/index"
        this.email=null
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Host":"www.agogmail.com","Origin":"https://www.agogmail.com","Referer":"https://www.agogmail.com","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with": "XMLHttpRequest","cookie":"my_mailbox=none"}
    }
    async get_message(id){
        let req=await fetch(`${this.api}/index/mailcontent.html`,{method:"POST",headers: this.headers,body:`code=${id}`});
        return req.json();
    }
    async get_email(type){
        let req=await fetch(`${this.api}/index/change.html`,{method:"POST",headers: this.headers,body:`type=${type}`});
        this.email=req.text()
        return this.email;
    }
}
module.exports = {agogmail};