
import path from "path";
import express from 'express'




export const configEngine = (app)=>{
    app.set("views", path.join(".src"), "views");
    app.set("view engine","ejs");

    // config static file

    app.use(express.static(path.join("/src",'public')))
}
