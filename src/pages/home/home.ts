import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  protected posts:any

  constructor(
    public navCtrl: NavController,
    public postsProv:PostsProvider,
    private loading: LoadingController
  ) { 

    let load = this.loading.create({content: 'carregando...'})
    
    console.log('iniciou')
    this.postsProv.getAll().subscribe( (sucesso)=> {
      this.posts = sucesso
    }, (erro)=>{ 
      console.error('problema na requisicao' + erro)
    } )

    console.log(this.posts)
    console.log('finalizou')

    //usando promisses
    //let load = this.loading.create({content: 'carregando...'})
    //load.present()
    
    //console.log('iniciou')
    // this.postsProv.getAll().then((sucesso)=>{
    //   this.posts = sucesso
    //   load.dismiss()
    // })

    // console.log('finalizou')
  }

  protected abrirPosts(id:any){
    this.navCtrl.push(DetalhesPage, {id: id})
  }

}
