import { Controller } from "../libs/Controller";

export class GlobalController extends Controller{

    public homepage(){
        console.log('test')
        this.response.render("pages/home");
    }
}