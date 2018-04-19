import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PostsProvider {
  
  private posts:any = []

  constructor(private http:HttpClient) {}

  public getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  public getPost(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  // public getAll() {
  //   return new Promise((resolve, reject)=>{
  //      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( (sucesso)=> {
  //        resolve(sucesso)
  //    }, (erro)=>{ 
  //      reject(console.error('problema na requisicao' + erro))
  //    })
  //   })
  //  }

}
