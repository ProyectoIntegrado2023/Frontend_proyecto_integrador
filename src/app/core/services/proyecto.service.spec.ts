import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from '../model/frontend/proyecto.model';

describe('ProyectoService', () => {
  let service: ProyectoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProyectoService],
    });
    service = TestBed.inject(ProyectoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve projects via GET', () => {
    const mockProjects: Proyecto[] = [];
    service.getAll().subscribe((projects) => {
      expect(projects).toEqual(mockProjects);
    });

    const req = httpTestingController.expectOne(service.url + '/list');
    expect(req.request.method).toBe('GET');
    req.flush(mockProjects);
  });

  it('should save a project via POST', () => {
    const mockProject: Proyecto = Proyecto.init(); // Define un proyecto de ejemplo para tu prueba
    service.save(mockProject).subscribe((project) => {
      expect(project).toEqual(mockProject);
    });

    const req = httpTestingController.expectOne(service.url + '/agregar');
    expect(req.request.method).toBe('POST');
    req.flush(mockProject);
  });

  it('should update a project via PUT', () => {
    const mockProject: Proyecto = Proyecto.init(); // Define un proyecto de ejemplo para tu prueba
    service.update(mockProject).subscribe((project) => {
      expect(project).toEqual(mockProject);
    });

    const req = httpTestingController.expectOne(service.url + '/editar/' + mockProject.id);
    expect(req.request.method).toBe('PUT');
    req.flush(mockProject);
  });

  it('should delete a project via DELETE', () => {
    const projectIdToDelete = 1; // ID del proyecto a eliminar
    service.delete(projectIdToDelete).subscribe((project) => {
      expect(project).toBeTruthy(); // Aquí puedes comprobar si se ha eliminado correctamente
    });

    const req = httpTestingController.expectOne(service.url + '/eliminar/' + projectIdToDelete);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});