package kjistik.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kjistik.backend.Models.Students;
import kjistik.backend.Services.Students.StudentServiceImp;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/alumnos")
public class StudentController {

    @Autowired
    final StudentServiceImp service;

    public StudentController(StudentServiceImp service) {
        this.service = service;
    }

    @GetMapping("/todos")
    List<Students> all() {
        return service.all();
    }

    @GetMapping("/uno/{id}")
    Students one(@PathVariable Long id) {
        return service.one(id);
    }

    @PostMapping("/nuevo")
    Students newStudent(@RequestBody Students alumnos) {
        return service.newStudent(alumnos);

    }

    @PutMapping("/cambiar/{id}")
    Students change(@RequestBody Students alumno, @PathVariable Long id) {
        return service.Change(alumno, id);
    }

    @PutMapping("/borrar/{id}")

    Students disable(@RequestBody Students alumno, @PathVariable Long id) {
        return service.disable(alumno, id);
    }

    /*
     * @DeleteMapping("/borar/{id}")
     * void delete(@PathVariable Long id){
     * service.delete(id);
     * }
     */
}
