import { observable, action, computed, makeAutoObservable, runInAction, makeObservable } from "mobx";
class BusinessData {
    isLogin = false

    buisness = {
        name: "",
        adress: "",
        phone: "",
        owner: "",
        logo: "",
        description: ""
    }
    baseUrl = 'http://localhost:8787/businessData'

    constructor() {
        console.log("ctor")
        makeObservable(this, {
            isLogin: observable,
            buisness: observable,
            getBusiness: action,
           sendDataToServer:action,
            setIsLogin: action
        })
        this.getBusiness();
    }
    setIsLogin = (val) => {
        console.log("setIsLogin: ", val)
        this.isLogin = val
    }
    getBusiness() {
        console.log("getBusiness")
        fetch(this.baseUrl,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }}
           ).then((res) => {
            res.json().then((data) => {
                runInAction(() => {
                    console.log("data",data)
                    this.buisness = data
                    console.log("dataafter",this.buisness)
                    
                        
                })
            })
        })

    }
    
    sendDataToServer() {
        console.log("sendDataToServer")
        fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.buisness)
        }
        ).then((result) => {
            console.log("result",result)
        }).catch(() => {
            console.error(result.status)
        })
    }

   
}
export default new BusinessData();