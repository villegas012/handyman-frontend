import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RelacionModelo } from 'src/app/shared/modelos/relacionModelo';
import { ServicioModelo } from 'src/app/shared/modelos/servicioModelo';
import { TecnicoModelo } from 'src/app/shared/modelos/tecnicoModelo';
import { ServicioService } from 'src/app/shared/servicios/servicio-servicio/servicio.service';
import { TecnicoService } from 'src/app/shared/servicios/tecnico-servicio/tecnico.service';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.css']
})
export class RegistrarServicioComponent implements OnInit {
  formularioCompleto = false;
  formulario: FormGroup;
  desactivarBoton = false;
  constructor(private readonly fb: FormBuilder,
              private readonly tecnicoServicio: TecnicoService,
              private readonly servicioServicio: ServicioService) { }

  ngOnInit(): void {
    this.crearFormulario();
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

  blurCampoIdServicio(): void {
    if (!!this.formulario.get('idServicio').value) {
      this.servicioServicio.obtenerDatoServicio(this.formulario.get('idServicio').value).subscribe(
        (servicioModelo: ServicioModelo) => {
          this.formulario.get('descripcion').setValue(servicioModelo.descripcion);
        });
    }else{
      this.formulario.get('descripcion').setValue('');
    }
  }

  clickGuardar(): void {
    const relacion = this.transformarTecnicoModeloARelacionModelo();
    this.tecnicoServicio.gruardarServicioTecnico(relacion).subscribe(
      (tecnicoModelo: TecnicoModelo) => {
        this.formularioCompleto = true;
        this.formulario.reset();
      }
    );
  }

  crearFormulario(): void {
    this.formulario = this.fb.group({
      idTecnico: ['', Validators.required],
      nombreTecnico: '',
      idServicio: ['', Validators.required],
      descripcion: '',
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  transformarTecnicoModeloARelacionModelo(): RelacionModelo {
    const fechaIn = (Date.parse(this.formulario.get('fechaInicio').value));
    const fechaFi = (Date.parse(this.formulario.get('fechaFin').value));
    return {
      idTecnico: this.formulario.get('idTecnico').value,
      idServicio: this.formulario.get('idServicio').value,
      fechaInicio: fechaIn,
      fechaFin: fechaFi
    };
  }


  get validarFecha(): boolean {
    const fechaIn = (Date.parse(this.formulario.get('fechaInicio').value));
    const fechaFi = (Date.parse(this.formulario.get('fechaFin').value));
    return !!fechaFi && !!fechaIn && fechaIn > fechaFi;
  }

}
