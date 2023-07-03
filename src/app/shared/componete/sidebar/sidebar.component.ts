import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
  items!: MenuItem[];
 
  constructor(private router: Router){}
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
         ]
      }
    ];
}
}
