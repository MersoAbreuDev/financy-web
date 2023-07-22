import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
  items!: MenuItem[];
  isLoginPage!: boolean;
  constructor(private router: Router,
              private locaStorage: LocalStorageService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/login'){
            this.isLoginPage = false;
        }else{
            this.isLoginPage = true;
        }
    }
    });
  }

  ngOnInit() {

    this.items = [
        {
            label: 'Cadastros',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Credor',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Cadastrar',
                            icon: 'pi pi-fw pi-bookmark',
                            command: () => {
                             this.router.navigateByUrl("/credor")
                         }
                        },
                        {
                            label: 'Consultar',
                            icon: 'pi pi-fw pi-video',
                            command: () => {
                             this.router.navigateByUrl("/credor/credor-consulta")
                         }
                        }
                    ]
                },
                 {
                   label: 'Responsável',
                   icon: 'pi pi-fw pi-plus',
                   items: [
                       {
                           label: 'Cadastrar',
                           icon: 'pi pi-fw pi-bookmark',
                           command: () => {
                               this.router.navigateByUrl("/responsavel")
                           }
                       },
                       {
                           label: 'Consultar',
                           icon: 'pi pi-fw pi-video',
                           command: () => {
                               this.router.navigateByUrl("/responsavel/responsaveis-consulta")
                           }
                       }
                   ]
               },
               {
                label: 'Usuario de sistema',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Cadastrar',
                        icon: 'pi pi-fw pi-bookmark',
                        command: () => {
                            this.router.navigateByUrl("/usuarios")
                        }
                    },
                    {
                        label: 'Consultar',
                        icon: 'pi pi-fw pi-video',
                        command: () => {
                            this.router.navigateByUrl("/usuarios/usuarios-consulta")
                        }
                    }
                ]
            }
           ]
        },
        {
          label: 'Lançamentos',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'Dividas',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Cadastrar',
                          icon: 'pi pi-fw pi-bookmark',
                          command: () => {
                           this.router.navigateByUrl("/dividas")
                       }
                      },
                      {
                          label: 'Consultar',
                          icon: 'pi pi-fw pi-video',
                          command: () => {
                           this.router.navigateByUrl("/dividas/divida-consulta")
                       }
                      }
                  ]
              },
              {
                label: 'Receitas',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Cadastrar',
                        icon: 'pi pi-fw pi-bookmark',
                        command: () => {
                         this.router.navigateByUrl("/receitas")
                     }
                    },
                    {
                        label: 'Consultar',
                        icon: 'pi pi-fw pi-video',
                        command: () => {
                         this.router.navigateByUrl("/receitas/receita-consulta")
                     }
                    }
                ]
            }
         ]
      },
      {
        label: 'Sair',
        icon: 'pi-power-off',
        command: () => {
            localStorage.clear();
            setTimeout(()=>{
            this.router.navigate(['login']);
            },1000)
        }
    }
    ];
}
}
