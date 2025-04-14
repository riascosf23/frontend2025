import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  title = 'WORLD AGENCY';

  data: any[] = [];
  newPerson = {
    nombre: '',
    edad: '',
    pais: '',
    talento: ''
  };
  editingPerson: any = null;  // Variable para determinar si estamos editando

  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.personaService.getAll().subscribe((data) => {
      this.data = data;
    });
  }

  createPerson(): void {
    this.personaService.create(this.newPerson).subscribe(() => {
      this.loadData(); 
      this.resetForm(); 
    });
  }

  // Editar persona
  editPerson(person: any): void {
    this.editingPerson = person;
    this.newPerson = { ...person };  // Rellenar el formulario con los datos actuales
  }

  // Actualizar persona
  updatePerson(): void {
    if (this.editingPerson) {
      this.personaService.update(this.editingPerson.id, this.newPerson).subscribe(() => {
        this.loadData();
        this.resetForm();
        this.editingPerson = null; // Resetear el modo edición
      });
    }
  }

  // Limpiar el formulario
  resetForm(): void {
    this.newPerson = {
      nombre: '',
      edad: '',
      pais: '',
      talento: ''
    };
  }

  // Eliminar persona
  deletePerson(id: string): void {
    this.personaService.delete(id).subscribe(() => {
      this.loadData();  // Recargar los datos después de eliminar
    });
  }

  currentPage = 1;
  itemsPerPage = 9;

  get pagedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
