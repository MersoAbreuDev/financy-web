import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/interfaces/usuario';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.scss']
})
export class UsuarioConsultaComponent {
  usuarios:any = [];
  usuarioDeleteDialog!: boolean;
  usuarioDialog:boolean = false;
  usuario!:IUsuario;
  submitted!: boolean;
  requestOptions:any;
  usuarioSelecionada:any;
 
  constructor(private usuarioService: LoginService,
              private activatedRoute :ActivatedRoute,
             ){}
    ngOnInit(){
      let params = new HttpParams();
      params = params.append('pagina', 0);
      params = params.append('quantidade',1000);
      params = params.append('ordem', "ASC");
      params = params.append('ordenarPor', "id");
      this.requestOptions = { params: params };
      let param: Observable<Params> = this.activatedRoute.params;
      this.buscarTodos();
    }

    buscarTodos(){
      this.usuarioService.buscarTodos(this.requestOptions).subscribe((data:any)=>{
        this.usuarios= data
      });

    }

    editar( id:number, usuario:IUsuario){
      this.usuarioDialog = true;
      return this.usuario = usuario;
    }

    delete(id: number, usuario: IUsuario) {
      this.usuarioDeleteDialog = true;
      return this.usuario = usuario;
    }
  
    deletar(id: number) {
      if (id) {
        this.submitted = true;
      //   this.usuarioService.deletar(id)
      //     .subscribe((response:any) => {
      //       this.usuario = response;
      //       this.buscarTodos();
      //     });
      // }
      }
      this.usuarioDeleteDialog = false;
    }

    salvar() {
      this.submitted = true;
      this.usuario = this.editar(  this.usuario.id, this.usuario);
      // if (this.usuario.nome.trim()) {
      //   if (this.usuario.id) {
      //     this.usuarioService.atualizar(this.usuario.id, this.usuario)
      //       .subscribe(
      //         (response:any) => {
      //           this.usuario = response;
      //         }
      //       )
      //     }
      //     this.usuarioDialog = false;
      //   }
    }

    hideDialog() {
      this.usuarioDialog = false;
      this.usuarioDeleteDialog= false;
      this.submitted = false;
    }
  
}
