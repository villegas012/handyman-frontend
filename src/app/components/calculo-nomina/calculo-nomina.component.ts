import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { TecnicoModelo } from 'src/app/shared/modelos/tecnicoModelo';
import { TecnicoService } from 'src/app/shared/servicios/tecnico-servicio/tecnico.service';

@Component({
  selector: 'app-calculo-nomina',
  templateUrl: './calculo-nomina.component.html',
  styleUrls: ['./calculo-nomina.component.css']
})
export class CalculoNominaComponent implements OnInit {
  formulario: FormGroup;
  formularioCompleto = false;
  constructor(private readonly router: Router,
              private readonly fb: FormBuilder,
              private readonly tecnicoServicio: TecnicoService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }
  redireccionar(ruta: string): void {
    this.router.navigate([ruta]);
  }

  crearFormulario(): void {
    this.formulario = this.fb.group({
      idTecnico: ['', Validators.required],
      nombreTecnico: '',
      semana: ['', Validators.required]
    });
  }

  blurCampoIdTecnico(): void {
    if (!!this.formulario.get('idTecnico').value) {
      this.tecnicoServicio.obtenerDatoTecnico(this.formulario.get('idTecnico').value).subscribe(
        (tecnicoModelo: TecnicoModelo) => {
          this.formulario.get('nombreTecnico').setValue(`${tecnicoModelo.nombre} ${tecnicoModelo.apellido}`);
        });
    }else{
      this.formulario.get('nombreTecnico').setValue('');
    }
    this.formularioCompleto = false;
  }

}
